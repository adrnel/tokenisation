var express = require('express');
var app = express();

var users = [
    {
        username: 'jack',
        password: 'jack'
    },
    {
        username: 'billy',
        password: 'billy'
    }
];

var checkUser = function (username, password) {
    for (var i in users) {
        var user = users[i];

        if (user.username === username && user.password === password) {
            user.token = Math.random().toString(36).substring(7);
            return user.token;
        }
    }
    return false;
};

var checkUserToken = function (username, token) {
    for (var i in users) {
        var user = users[i];

        if (user.username == username && user.token == token) {
            return true;
        }
    }
    return false;
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/authorise', function (req, res) {
    var name = req.param('name');
    var password = req.param('password');

    res.send(checkUser(name, password));
});

app.get('/authorise-token', function (req, res) {
    var name = req.param('name');
    var token = req.param('token');

    res.send(checkUserToken(name, token));
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/gaca', function (req, res) {
    res.send([
        {
            title: "Form 39 OBSTACLE EVALUATION REQUEST",
            date: "Mar 2011",
            icon: "file-pdf-o",
            type: "Circulars",
            audience: "Pilot",
            sector: "Information Technology"
        },
        {
            title: "Form 8320-1 Major Repair & Or Alteration",
            date: "Jul 2009",
            icon: "file-pdf-o",
            type: "Circulars",
            audience: "Pilot",
            sector: "Information Technology"
        },
        {
            title: "Form 8130-9 Statement Of Conformity",
            date: "Jul 2009",
            icon: "file-pdf-o",
            type: "News",
            audience: "Pilot",
            sector: "Information Technology"
        },
        {
            title: "Form 8130-9 Statement Of Conformity",
            date: "Jul 2009",
            icon: "file-pdf-o",
            type: "News",
            audience: "Pilot",
            sector: "Information Technology"
        }
    ]);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
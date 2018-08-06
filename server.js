const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

/*
function setSession(req, res) {
    const name = req.params['name'];
    const value = req.params['value'];
    req.session[name] = value;
    res.send(req.session);
}

function getSession(req, res) {
    const name = req.params['name'];
    const value = req.session[name];
    res.send(value);
}

function getSessionAll(req, res) {
    res.send(req.session);
}

function resetSession(req, res) {
    res.session.destroy();
    res.send(200);
}
*/

//app.get('/api/session/set/:name/:value', setSession);
//app.get('/api/session/get/:name', getSession);
//app.get('/api/session/get', getSessionAll);
//app.get('/api/session/reset', resetSession);

//mongoose.connect('mongodb://localhost/course-manager');
mongoose.connect('mongodb://user:webdev2@ds213612.mlab.com:13612/webdev-server-node-melina');

require('./services/user.service.server')(app);
require('./services/section.service.server')(app);
require('./services/enrollement.service.server')(app);

app.listen(3000);
const express = require('express');
const Github = express.Router();
const github_clientID = '9b11b584e44ee5e25886';
const github_secret = '618ccc3582caa82567d9a2e24425e992101b2b8e';
const GithubController = require('../controllers/GithubController.js');
const fetch = require('node-fetch');


Github.get('/auth', (req, res) => {
    const url = `https://github.com/login/oauth/authorize?client_id=${github_clientID}&scope=notifications`;
    res.redirect(url);
})

Github.get('/redirect', (req, res) => {
    const { code } = req.query;
    fetch(`https://github.com/login/oauth/access_token?client_id=${github_clientID}&client_secret=${github_secret}&code=${code}`,
        { method: 'POST', headers: { Accept: 'application/json' } })
        .then((raw) => raw.json())
        .then((data) => {
            res.cookie('access_token', data.access_token);
            res.redirect('/');
        })
})

Github.get('/get_token', (req, res) => {
    res.json(req.cookies.access_token !== undefined);
})

Github.get('/notifications', (req, res) => {
    fetch('http://api.github.com/notifications', { headers: { Accept: 'application/json', Authorization: `token ${req.cookies.access_token}` } })
        .then(raw => raw.json())
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

module.exports = Github;
__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/login.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/checkapikey', (req, res) => {
    res.sendFile(__path + '/views/checkapikey.html')
})

router.get('/apikey', (req, res) => {
    res.sendFile(__path + '/views/apikey.html')
})

module.exports = router

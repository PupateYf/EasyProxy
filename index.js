const url = require('url')
const express = require('express')
const config = require('./config')
const passThrough = require('./lib/passThrough')

var app = express()

app.use((req, res, next) => {
    passThrough(req, res, next)
})

var server = app.listen(config.port)

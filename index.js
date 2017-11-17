const url = require('url')
const os = require('os')
const express = require('express')
const config = require('./config')
const passThrough = require('./lib/passThrough')

var app = express()

app.use((req, res, next) => {
    passThrough(req, res, next)
})

var server = app.listen(config.port, () => {
    console.log('The proxy server run on:')
    let osInfo = os.networkInterfaces()
    for(let key in osInfo){
        osInfo[key].forEach(info => {
            info.family == 'IPv4'
            ? console.log(`-- ${info.address}:${config.port}`)
            : ''
        })
    }
})

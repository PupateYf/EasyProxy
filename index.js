const url = require('url')
const express = require('express')
const config = require('./config')

var app = express()

app.use((req, res, next) => {
    //inspect here
    console.log('url: ', req.url)
    console.log('port ', url.parse(req.url).port)
    console.log('protocol: ',req.protocol)
    console.log('hostname: ',req.hostname)
    console.log('port: ',req.port)
    console.log('method: ',req.method)
    console.log('path: ',req.path)
    console.log('headers: ',req.headers)
    // console.log('protocol: ',req.protocol)
    // console.log('protocol: ',req.protocol)
    // console.log('protocol: ',req.protocol)

})

var server = app.listen(config.port)

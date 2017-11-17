var url = require('url')
var request = require('request')

var getURI = function (req) {
    return url.parse(req.url)
}

var getHostname = function (req) {
    return req.hostname
}

var getMethod = function (req) {
    return req.method
}

var getHeaders = function (req) {
    return req.headers
}

function passThrough(req, res, next) {
    let options = {
        uri: getURI(req),
        qs: req.query,
        method: getMethod(req),
        headers: getHeaders(req)
    }

    let proxyServer = request(options).on('error', err => {
        console.log(err)
    }).pipe(res)
}

module.exports = passThrough
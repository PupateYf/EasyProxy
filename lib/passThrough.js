var url = require('url')
// request header
// Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
// Accept-Encoding:gzip, deflate, br
// Accept-Language:zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6
// Cache-Control:max-age=0
// Connection:keep-alive
// Cookie:BAIDUID=B1512237696B5627F6992E02DC570D19:FG=1; BIDUPSID=3A4FB0B787362C81ABCE75E66C790900; PSTM=1510464016; H_PS_645EC=2763ZTaV3TZ97GlT2teVq1xezlMkPCVKKw4%2BZnXNsl5WeQ27KOGDfSK0RzY; BD_CK_SAM=1; PSINO=7; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BD_HOME=0; H_PS_PSSID=1465_21109_18560_17001_24880_22074; BD_UPN=123253
// Host:www.baidu.com
// Upgrade-Insecure-Requests:1
// User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36

// request options
//protocol <string> Protocol to use. Defaults to http:.
//host <string> A domain name or IP address of the server to issue the request to. Defaults to localhost.
//hostname <string> Alias for host. To support url.parse(), hostname is preferred over host.
//family <number> IP address family to use when resolving host and hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.
//port <number> Port of remote server. Defaults to 80.
//localAddress <string> Local interface to bind for network connections.
//socketPath <string> Unix Domain Socket (use one of host:port or socketPath).
//method <string> A string specifying the HTTP request method. Defaults to 'GET'.
//path <string> Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'. An exception is thrown when the request path contains illegal characters. Currently, only spaces are rejected but that may change in the future.
//headers <Object> An object containing request headers.
//auth <string> Basic authentication i.e. 'user:password' to compute an Authorization header.
//agent <http.Agent> | <boolean> Controls Agent behavior. Possible values:
//undefined (default): use http.globalAgent for this host and port.
//Agent object: explicitly use the passed in Agent.
//false: causes a new Agent with default values to be used.
//createConnection <Function> A function that produces a socket/stream to use for the request when the agent option is not used. This can be used to avoid creating a custom Agent class just to override the default createConnection function. See agent.createConnection() for more details.
//timeout <number>: A number specifying the socket timeout in milliseconds. This will set the timeout before the socket is connected.

var http = require('http')

var getProtocol = function (req) {
    return req.protocol
}

var getHostname = function (req) {
    return req.hostname
}

var getPort = function (req) {
    return url.parse(req.url).port
}

var getMethod = function (req) {
    return req.method
}

var getPath = function (req) {
    return req.path
}

var getHeaders = function (req){
    return req.headers
}


function passThrough(req, res, next) {

}
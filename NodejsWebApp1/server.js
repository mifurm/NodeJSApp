"use strict";
var http = require("http");
var os = require("os");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World app served from instance name ' + os.hostname() + os.platform());
}).listen(port);
//# sourceMappingURL=server.js.map
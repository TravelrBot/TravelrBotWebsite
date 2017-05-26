var restify = require('restify');
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('listening for traffic!');
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get(/\/?.*/, restify.serveStatic({
    directory: './templated-urban',
    default: 'index.html'
}));


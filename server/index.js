var PATH = __dirname.replace(/\/server$/, "/client/");
var PORT = process.env.PORT || 5000;

var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);


app.use(express.static(PATH));
app.get("/", function(req, res){
	res.sendfile("client/index.html");
});


console.log("Starting server on port %d", PORT);
server.listen(PORT);

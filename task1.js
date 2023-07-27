var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/htmml'});
    res.end("Hello World!");
}).listen(9090);
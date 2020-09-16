const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

var server = http.createServer(respond).listen(port, () => {
    console.log("Server running at port: " + port);    
});

function respond(request, response){
    response.end();
}
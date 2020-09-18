const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;

// Create webserver on port 8080 and use a callback-function for request and response.
http.createServer(respond).listen(port, () => {
    console.log("Server running at port: " + port); 
});

function respond(request, response){
    let params = url.parse(request.url, true);
    let key = "theKey";
    let urlPath = "/secret"

    if(params.pathname == urlPath && params.query.key == key){
        fs.readFile('./secret.html', {encoding: 'utf8'}, (err, htmlFile) => {
            if(err){
                alert(err.message);
            }else{
                response.end(htmlFile);
            }
        });
    }
    else{
        fs.readFile('./wishList.txt', {encoding: 'utf8'}, (err, txtFile) => {
            if(err){
                alert(err.message);
            }else{
                response.end(txtFile);
            }
        });
    }
}
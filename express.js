const express = require('express');
const url = require('url');
const app = express();
const port = 8080;

// get text from wishList.txt and show it on the root page.
app.get('/', (request, response) => response.sendFile('/wishList.txt',{root: __dirname}));

// show secret.html if user enters the correct key in url url params query else user gets an access denied message. 
app.get('/secret', (request, response) => {
    let params = url.parse(request.url, true);
    let key = "theKey";

    if(params.query.key == key){
        response.sendFile('/secret.html', {root: __dirname})
    }else{
        response.end(`<h1>ACCESS DENIED</h1>
        <p>You need the right key to access this page</p>`);
    }
});

app.listen(port, () => console.log('Server is running...'));
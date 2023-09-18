// import required dependencies     
 const express = require("express");
const html = require("./public/html.js")
const api = require("./public/api.js")


//const { clog } = require('./middleware/clog');
//const api = require('./public/assets/js/index.js');

//define a port to listen on
const PORT = process.env.PORT || 3001;

//instantiate an instance of the express package
const app = express();

//start up middleware routers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
//modularize routes for html and api calls

app.use(api);
app.use(html);

// start the server to listen for requests from client
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

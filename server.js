var express = require("express");
var app = express();



//**************************************/
// Server Configuration
//**************************************/

//Render HTML from the endpoints
var ejs = require('ejs');
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

// server static files(js,css,img,pdf)
app.use(express.static(__dirname +"/public"));

//**************************************/
// Configure body-parser
//**************************************/
var bparser = require('body-parser');
app.use(bparser.json());
//**************************************/
// Server HTML
//**************************************/

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/admin', function(req, res){
    res.render('admin.html');
});

app.get('/about', function(req, res){
    res.send('<h1 style="color:blue">Shamus Cerny</h1>');
});

app.get('/contact', function(req, res){
    res.send('<p>Please Contact me at <b>shaycerny20@gmail.com</b></p>');
});

//**************************************/
// API Endpoints
//**************************************/
var list = [];

app.post('/API/items', function(req, res){
    var item = req.body;
    list.push(item);

    res.json(item);
});

app.get('/API/items', function(req, res){
    res.json(list);
});


//start the project
app.listen(8080, function(){
    console.log("server running at localhost:8080"); 
});



// API -> Application Programming Interface

//ctrl + c == Kill the server.


require('./db/db.js');
const config=require('./config/config.js');
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const indexController=require('./controllers/index');
const bodyParser=require('body-parser');

var app=express()
app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layout/'}))
app.set('view engine','hbs')
app.listen(process.env.PORT || 5000,()=>{
    console.log("Express server is started at port : "+config.port);
})
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/views/assets/')));
app.use('/',indexController);

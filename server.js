const init = require('./db/init.sequelize.js');
const config = require('./config/connection.server.js');
const db = require('./db/models.sequelize.js');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
var cors = require('cors')


var app = express()
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layout/' }))
app.set('view engine', 'hbs')
app.listen(process.env.PORT || config.port, () => {
    console.log("Express server is started at port : " + config.port);
})
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '/views/assets/')));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.use('/', routes)

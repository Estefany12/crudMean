const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser=require('body-parser');

const { mongoose } = require('./database');
const config = require('./config');


app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
//cors
 /*app.use(cors(
    config.application.cors.server
  ));*/
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// Routes
app.use('/api/employees', require('./routes/employee.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
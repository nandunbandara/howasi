const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/user.model');
require('./config/passport');

const routes = require('./routes');

const app = express();
const PORT = 9001 | process.env.PORT;

app.use(bodyParser.json());
app.use('/', routes);

mongoose.connect('mongodb://localhost/howasi', err => {
    if(err) console.log("ERROR: Could not connect to database");
});
mongoose.set('debug', true);

app.listen(PORT, err => {
    if(err){
        console.log(`Error: Could not run application on port ${PORT}`);
        return;
    }

    console.log(`Application started on port ${PORT}`);

});
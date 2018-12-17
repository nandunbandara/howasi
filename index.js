const express = require('express');
const mongoose = require('mongoose');

require('./models/user.model');
require('./config/passport');

const routes = require('./routes');

const app = express();
const PORT = 9001 | process.env.PORT;

app.use(routes);

mongoose.connect('mongodb://localhost/howasi');
mongoose.set('debug', true);

app.listen(PORT, err => {
    if(err){
        console.log(`Error: Could not run application on port ${PORT}`);
        return;
    }

    console.log(`Application started on port ${PORT}`);

});
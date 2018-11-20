const express = require('express');

const app = express();
const PORT = 9001 | process.env.PORT;

app.listen(PORT, err => {
    if(err){
        console.log(`Error: Could not run application on port ${PORT}`);
        return;
    }

    console.log(`Application started on port ${PORT}`);

});
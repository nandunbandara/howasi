const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({

    title: { type:string, required:true },
    description: { type:string, required:true },
    date: { type:string, requried:true },
    location: { type:string, required:true },
    speakers: [],
    created_on: { type:date, required:true },
    updated_on: { type:date, required:true }

});

module.exports = mongoose.model("Event", eventSchema);
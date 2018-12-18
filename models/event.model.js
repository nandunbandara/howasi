const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({

    title: { type:String, required:true },
    description: { type:String, required:true },
    date: { type:String, requried:true },
    location: { type:String, required:true },
    speakers: [],
    created_on: { type:date, required:true },
    updated_on: { type:date, required:true }

});

module.exports = mongoose.model("Event", eventSchema);
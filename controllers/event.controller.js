"use strict";

const Event = require("../models/event.model");

/*
    GET /api/events
    GET all available events
*/
exports.getAllEvents = (req, res, next) => {

    Event.find({}, (err, data) => {
        if(err) {
            res.status(500).json({ success:false, message: "Could not retrieve events"});
            next();
        }

        res.status(200).json({ success:true, data:data });
    });

};

/*
    GET /api/events/:id
    GET event by id
*/
exports.getEventsById = (req, res, next) => {

    Event.find({ _id: req.params.id }, (err, data) => {

        if(err){
            res.status(500).json({ success:false, message:"Could not retrieve event"});
            next();
        }

        if(data.length === 0){
            res.status(400).json({ success:false, message:"Could not find event with the provided id."});
            next();
        }

        res.status(200).json({ success:true, data:data });

    });

};

/*
    POST /api/events 
    Create new event
*/
exports.createNewEvent = (req, res, next) => {

    if(req.body.title === "" || typeof req.body.title === undefined){
        res.status(400).json({ success:false, message:"Event title is not defined"});
        return;
    }

    if(req.body.description === "" || typeof req.body.title === undefined){
        res.status(400).json({ success:false, message:"Event description is not defined"});
        return;
    }

};
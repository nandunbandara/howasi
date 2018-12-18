const router = require('express').Router();
const auth = require('../auth');
const Event = require('../../models/event.model');

/*
    GET /api/events
    get all events
*/
router.get('/', (req, res) => {
    
    Event.find({}, (err, events) => {
        // database level error
        if(err) return res.status(500).json({ success:false, message: "Could not retrieve events", error:err });
    
        return res.status(200).json({ success:true, data:events });
        
    });
});

/*
    GET /api/events/:id
    get event by id
*/
router.get('/:id', (err, event) => {
    if(err) return res.status(500).json({ success:false, message: "Could not retreive event", error:err });
    if(!event) return res.status(404).json({ success:false, message: "Could not find event", error: { id: {
        message: "invalid"
    }}});
    
    return res.status(200).json({ success:true, data:event });
});


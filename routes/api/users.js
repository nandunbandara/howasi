const router = require('express').Router();
const auth = require('../auth');
const User = require('../../models/user.model');

router.post('/', auth.optional, (req, res, next) => {

    let user = req.body;

    if(!user.email)
        return res.status(400).json({ success:false, message: "Email is required"});
    
    if(!user.password)
        return res.status(400).json({ success:false, message: "Password is required"});

    let userObject = new User(user);

    userObject.setPassword(user.password);

    return userObject.save()    
                .then(() => res.json({ user: finalUser.toAuthJSON() }));
                
});
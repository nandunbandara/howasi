const jwt = require('express-jwt');

// get token from request header
const getTokenFromHeaders = (req) => {

    const { headers: { authorization } } = req;

    if(authorization && authorization.split(' ')[0] === "Token") 
        return authorization.split(' ')[1];

    return null;

};

const auth = {

    required: jwt({
        secret: 's3cr3t',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
      }),
      optional: jwt({
        secret: 's3cr3t',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
      }),

};

module.exports = auth;
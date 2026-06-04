const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('./config.js')

function authMiddleware(req, res, next) {
    const token = req.headers.token;

    console.log("Headers:", req.headers);
    console.log("Token:", req.headers.token);
    const decoded = jwt.verify(token, JWT_KEY)
    const username = decoded.username
    if (username) {
        req.username = username;
        next();
    }
    else {
        res.status(403).json({"message": "token was incorrect"});
    }
}


module.exports = {
    authMiddleware: authMiddleware
}
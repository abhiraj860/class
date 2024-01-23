const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./config');

function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;
        const words = token.split(' ');
        const jwtToken = words[1];
        const decode = jwt.verify(jwtToken, JWT_SECRET);
        req.userId = decode.userId;
        next();
    } catch(error) {
        return res.status(403).json({
            message: "User not authenticated"
        });
    }
}

module.exports = {authMiddleware};
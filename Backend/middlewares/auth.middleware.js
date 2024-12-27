const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');

const verifyToken = async (token) => {
    if (!token) {
        throw new Error('Unauthorized');
    }

   
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        throw new Error('Unauthorized');
    }

 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
};

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        const decoded = await verifyToken(token);

        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'User not found. Unauthorized' });
        }

        req.user = user; 
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        const decoded = await verifyToken(token);

        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: 'Captain not found. Unauthorized' });
        }

        req.captain = captain; 
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

const {Router} = require('express');
const {authMiddleware} = require('./middleware');
const {Account} = require('../db');

const router = Router();

router.get('/balance', authMiddleware,async (req, res)=>{
    const {userId} = req;
    const balance = await Account.findOne({userId},{ _id: 0, userId: 0, __v:0 }).select('balance');
    res.status(200).json({
        balance : balance.balance
    });
});



module.exports = router;
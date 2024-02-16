const {Router} = require('express');
const {authMiddleware} = require('./middleware');
const {Account, User, Transactions} = require('../db');
const { default: mongoose } = require('mongoose');


const router = Router();

router.get('/balance', authMiddleware,async (req, res)=>{
    const {userId} = req;
    const balance = await Account.findOne({userId},{ _id: 0, userId: 0, __v:0 }).select('balance');
    const name = await User.findOne({_id:userId});
    res.status(200).json({
        balance : balance.balance,
        firstName: name.firstName
    });
});

router.post('/transfer', authMiddleware, async (req, res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount, to} = req.body;
    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: 'Insufficient balance'
        });
    }
    const person = await Transactions.findOne({userId: req.userId}).session(session); 

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: 'Invalid account'
        });
    }

    const toPerson = await Transactions.findOne({userId: to}).session(session);


    await Account.updateOne({userId: req.userId}, {'$inc': {balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {'$inc': {balance: amount}}).session(session);

    const personToData = {otherId: to, amount: -amount, received: false};
    await Transactions.updateOne({userId: req.userId}, {$push:{Transactions: personToData}}).session(session);

    const personData = {otherId: req.useId, amount: amount, received: true};
    await Transactions.updateOne({userId: to}, {$push:{Transactions: personData}}).session(session);

    await session.commitTransaction();
    
    res.status(200).json({
        message: 'Transfer successful'
    });
});


module.exports = router;
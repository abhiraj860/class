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

// route.get('/getTransaction', authMiddleware, async(req, res)=>{
//     const getId = req.userId;
//     const getStatement = await Transactions.findById({userId: getId}, "transactions");
//     console.log(getStatement);
//     if(getStatement) {
//         res.status(200).json({
        
//         })
//     }
// });



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

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: 'Invalid account'
        });
    }


    await Account.updateOne({userId: req.userId}, {'$inc': {balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {'$inc': {balance: amount}}).session(session);

    const fromData = await User.findById(req.userId, "firstName lastName").session(session);
    const toData = await User.findById(to, "firstName lastName").session(session);
    console.log(fromData);

    const personToData = {firstName: toData.firstName, lastName: toData.lastName, amount: -amount, received: false };
    const a = await Transactions.updateOne({userId: req.userId}, {$push:{transactions: personToData}}).session(session);
    
    const personData = {firstName: fromData.firstName, lastName: fromData.lastName, amount: amount, received : true};
    await Transactions.updateOne({userId: to}, {$push:{transactions: personData}}).session(session);

    await session.commitTransaction();
    
    res.status(200).json({
        message: 'Transfer successful'
    });
});


module.exports = router;
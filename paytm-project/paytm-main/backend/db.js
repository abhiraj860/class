const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhiaditya860:ZHXUrjX1q1Rg18RV@cluster0.xnayn8w.mongodb.net/paytm');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const TransactionsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    received: {
        type: Number,
        required: true
    },
    send: {
        type: Number,
        required: true
    },
    transactions: [{
        firstName: {
            type: String,
            required: true,
            maxLength: 50
        },
        lastName: {
            type: String,
            required: true,
            maxLength: 50
        },
        amount: {
            type: Number,
            required: true
        },
        received: {
            type: Boolean,
            required: true
        }
    }]
});

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', AccountSchema);
const Transactions = mongoose.model('TransactionsSchema', TransactionsSchema);

module.exports = {
    User,
    Account,
    Transactions
};
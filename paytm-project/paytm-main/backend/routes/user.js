const {Router} = require('express');
const {User, Account} = require('../db');
const { JWT_SECRET } = require('./config');
const {authMiddleware} = require('./middleware');

const jwt = require('jsonwebtoken');
const z = require('zod');

const router = Router();


const signupSchema = z.object({
    username: z.string().email().min(5),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    password: z.string().min(1)
});

router.get('/me', authMiddleware, async(req, res)=>{
    return res.status(200).json({
        message: "User verified"
    });
});

router.post('/signup', async (req, res)=>{
    const check = signupSchema.safeParse(req.body);
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    if(check.success) {
        const find = await User.findOne({username});
        if(!find) {
            const user = await User.create({
                username,
                firstName,
                lastName,
                password
            });
            const initialBalance = Math.floor(Math.random() * 10000) + 1;
            await Account.create({
                userId: user._id,
                balance: initialBalance
            });
            const token = jwt.sign({userId: user._id}, JWT_SECRET);
            return res.status(200).json({
                message: 'User created succesfully',
                token
            });
        }
    }
    return res.status(411).json({
        message: 'Email already taken / Incorrect inputs'
    });
});

const signInSchema = z.object({
    username: z.string().email().min(2),
    password: z.string().min(1)
});

router.post('/signin', async(req, res)=>{
    const verify = signInSchema.safeParse(req.body);
    if(verify.success) {
        const username = req.body.username;
        const password = req.body.password;
        const find = await User.findOne({username, password});
        if(find) {
            const token = jwt.sign({userId: find._id}, JWT_SECRET);
            return res.status(200).json({
                token
            });
        }
    }
    return res.status(411).json({
        message: 'Error while logging in'
    });
});


router.get('/bulk', authMiddleware, async (req, res)=>{
    const getFilter = req.query.filter;
    const getUserId = req.userId;
    try {
        const getData = await User.find({ $or: [
            { firstName: { $regex:getFilter} },
            { lastName : { $regex:getFilter} }
          ],
        _id: {
            $ne: getUserId
        }}).select('firstName lastName _id');
        if(getData.length === 0) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        res.status(200).json({users: getData});
    } catch(err) {
        res.status(407).json({
            message: 'Contact not found'
        });
    }
    
});


// const updateSchema = z.object({
//     password: z.string().min(2).optional(),
//     firstName: z.string().min(1).optional(),
//     lastName: z.string().min(2).optional()
// }).strict();

// router.put('/', authMiddleware, async(req, res)=>{
//     const getId = req.userId;
//     const updates = req.body;
//     const check = updateSchema.safeParse(updates);
//     if(check.success) {
//         const getObject = await User.findByIdAndUpdate(getId, updates);
//         res.status(200).json({
//             message: 'Updated successfully'
//         });
//     } else {
//         res.status(411).json({
//             message: 'Error while updating information'
//         });
//     }
    
// });


router.use((err, req, res, next) => {
    res.status(411).json({
        message: "Error"
    });
});


module.exports = router;
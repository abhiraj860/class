const {Router} = require('express');
const {User} = require('../db');
const { JWT_SECRET } = require('./config');

const jwt = require('jsonwebtoken');
const z = require('zod');

const router = Router();


const signupSchema = z.object({
    username: z.string().email().min(5),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    password: z.string().min(1)
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

router.use((err, req, res, next) => {
    res.status(411).json({
        message: "Error"
    });
});


module.exports = router;
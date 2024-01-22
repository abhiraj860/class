const {Router} = require('express');
const {User} = require('../db');
const { JWT_SECRET } = require('./config');

const jwt = require('jsonwebtoken');
const z = require('zod');

const router = Router();


const userSchema = z.object({
    username: z.string().email().min(5),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    password: z.string().min(1)
});

router.post('/signup', async (req, res)=>{
    const check = userSchema.safeParse(req.body);
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    if(check.success) {
        const find = await User.findOne({username});
        if(!find) {
            const token = jwt.sign(username, JWT_SECRET);
            await User.create({
                username,
                firstName,
                lastName,
                password
            });
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

router.use((err, req, res, next) => {
    res.status(411).json({
        message: "Error"
    });
});


module.exports = router;
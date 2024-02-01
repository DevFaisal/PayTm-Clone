import express from 'express';
import z from 'zod';
import User from '../Models/User.Model.js';
import jwt from "jsonwebtoken";
import authMiddleware from '../Middlewares/authMiddleware.js';
import Account from '../Models/Bank.Model.js';

const router = express.Router();

const singUpSchema = z.object({
    userName: z.string().email(),
    password: z.string().min(2).max(20),
    firstName: z.string().min(2).max(20),
    lastName: z.string().min(2).max(20),
});

const singInSchema = z.object({
    userName: z.string().email(),
    password: z.string().min(2).max(20),
})

//SingUp route
router.post('/signup', async (req, res) => {

    const { userName, password, firstName, lastName } = req.body;
    const isValid = singUpSchema.safeParse(req.body);

    if (!isValid.success) {
        return res.status(400).json({ error: isValid.error });
    }

    const existingUser = await User.findOne({ userName });

    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
        userName,
        password,
        firstName,
        lastName,
    });

    const userId = user._id;


    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({ userId }, process.env.JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token,
    })
})

//SignIn route
router.post('/signin', async (req, res) => {
    const { userName, password } = req.body;
    const { success } = singInSchema.safeParse(req.body);
    try {

        if (!success) {
            res.status(400).json({ error: "Invalid Input" });
        }

        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(400).json({ error: "User does not exist" });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: "Invalid Password" });
        }
        else {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            return res.json({
                message: "User logged in successfully",
                token: token,
            })
        }

    } catch (error) {

        res.status(500).json({ error: "Something went wrong" });
    }


})


const updateBody = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().optional(),
})


router.put('/', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while Updating"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        message: "Update Successfully"
    })
})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

router.get('/me', authMiddleware, async (req, res) => {
    const userId = req.userId

    const user = await User.findOne({
        _id: userId
    })

    if (!user) {
        res.status(410).json({
            message: "Invalid User"
        })
    }
    else {

        res.status(200).json({
            message: "Valid User",
        })
    }

})



export default router;


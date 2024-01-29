import express from 'express';
import userRouter from './User.Router.js';
import accountRouter from "./Account.Routes.js"

const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accountRouter)

export default router;

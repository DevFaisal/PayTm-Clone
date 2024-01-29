import express from 'express';
import rootRouter from '../Routes/index.js';
import cors from 'cors';
import connectDB from '../db.js'


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.use('/api/v1', rootRouter);

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}`);
})
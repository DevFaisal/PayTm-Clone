import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/PayTm`)
        console.log("MongoDB connected")
    } catch (error) {
        return console.log("Error while connecting to MonogoDB")
    }

}

export default connectDB
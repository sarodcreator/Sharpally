import mongoose from "mongoose";

const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}
export default Connectdb;
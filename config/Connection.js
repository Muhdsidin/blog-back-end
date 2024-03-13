const mongoose = require("mongoose")
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://bsidin79:w1w951IOYY8WiBB2@cluster0.tljiaop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
        });
        console.log("Server is connected to MongoDB");
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
}

module.exports = connectDatabase;
import { mongoose } from "../routes/allRoutes.js";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName : "MelodyHub",
        });
        console.log("MongoDb database connected successfully.");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDb;
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MONGODB");
  } catch (error) {
    console.log("Error connecting to MOngoDB", error.message);
  }
};

export default connectMongoDB;

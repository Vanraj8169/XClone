  import mongoose from "mongoose";

  export const connectMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_DB_URI);
      console.log("Connected to DB");
    } catch (error) {
      console.log(`Error connecting to DB: ${error.message}`);
    }
  };

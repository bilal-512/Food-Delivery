import mongoose from "mongoose";
console.log("MONGO_URL:", process.env.MONGO_URL);

export const connectDB = async () => {
  await mongoose
    .connect(
      
      process.env.MONGO_URL
    )
    .then(() =>console.log("DB Connected"));
};

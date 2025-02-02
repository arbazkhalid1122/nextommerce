import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  try {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    mongoose.connect('mongodb+srv://arbazkhann2106:<arbazkhann2106>@ecommerce.uwxmnoj.mongodb.net/', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    return handler(req, res);
  } catch (err) {
    console.log("DATABASE CONNETCTION FAILED");
    console.log(err.message);
  }
};

export default connectDB;

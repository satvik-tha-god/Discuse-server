const mongoose = require('mongoose');

const URI = "mongodb+srv://aditya:admin1234@cluster0.zj3ve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser:true
  });
  console.log("DB connected...!");
};

module.exports = connectDB;

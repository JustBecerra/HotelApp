const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to mongoDB");
}).catch(err => {
    console.log(err.message);
})
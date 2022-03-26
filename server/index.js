const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://JustoBecerra:springfield3006@location.t03oh.mongodb.net/HotelDB?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("arranco")
})
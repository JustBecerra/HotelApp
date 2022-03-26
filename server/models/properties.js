const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    destinationId: {
        type:String,
    },
    pageNumber: {
        type:Number,//not sure if number or string
    },
    pageSize: {
        type:Number,//not sure if number or string
    },
    checkIn: {
        type:String,
    },
    checkOut: {
        type:String,
    },
    adults1: {
        type:Number,//not sure if number or string
    },
    sortOrder: {
        type:String,
    },
    locale: {
        type:String,
    },
    currency: {
        type:String,
    },
})
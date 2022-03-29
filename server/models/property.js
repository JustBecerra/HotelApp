const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    destinationId: {
        type:Number,
        required: true,
    },
    pageNumber: {
        type:Number,
        required: true,
    },
    pageSize: {
        type:Number,
        required: true,
    },
    checkIn: {
        type:String,
        required: true,
    },
    checkOut: {
        type:String,
        required: true,
    },
    adults1: {
        type:Number,
        required: true,
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

const property = new mongoose.model('property', propertySchema)

module.exports = property
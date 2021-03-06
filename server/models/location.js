const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    query: {
        type: String,
    },
    locale: {
        type: String,
    },
    currency: {
        type: String,
    }
})

const location = new mongoose.model('location', locationSchema)

module.exports = location
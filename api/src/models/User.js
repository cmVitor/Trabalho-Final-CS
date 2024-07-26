const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username: {
        type: String,
        Required: true
    },
    cpf: {
        type: String,
        Required: true
    },
    email: {
        type: String,
        Required: true
    }
})

module.exports = mongoose.model('User', Schema)
const { Schema, model } = require('mongoose')

/* This is creating a new schema for the user model. */
const userSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    postalZip: { type: String, required: true },
}, {
    timestamps: false,
    versionKey: false
})

module.exports = model('users', userSchema)
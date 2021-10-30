const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({

    fname: {
        type: String,
        required: [true, "Please provide your First Name"],
        trim: true
    },

    lname: {
        type: String,
        required: [true, "Please provide your Last Name"],
        trim: true
    },

    regNumber: {
        type: String,
        required: [true, "Please provide your Registration Number"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        unique: true,
        lowercase: true
    },

    dept: {
        type: String,
        required: [true, "Please provide your Department"],
        trim: true
    },

    section: {
        type: String,
        required: [true, "Please provide your Section"],
        trim: true
    },

    year: {
        type: Number,
        required: [true, "Please provide the year"],
    },

    hosteler: {
        type: String,
        required: [true, "Please provide hosteler status"],
        trim: true
    },

    age: {
        type: Number,
        required: [true, "Please provide your age"],
    },

    gender: {
        type: String,
        required: [true, "Please provide Gender"],
        trim: true
    },

    vaccine: {
        type: String,
        required: [true, "Please provide your vaccine status"],
        trim: true
    },

    vaccine_dose: {
        type: String,
        required: [true, "Please provide your vaccine dose status"],
        trim: true
    },

    covid_status: {
        type: String,
        required: [true, "Please provide your covid status"],
        trim: true
    },

    home_state: {
        type: String,
        required: [true, "Please provide your home state"],
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Data', dataSchema);
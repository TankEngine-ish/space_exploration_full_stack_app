const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    
    flightNumber: {
        type: Number,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },

    customers: [String],
    
    upcoming: {
        type: Boolean,
        required: true,
    }, 
    success: {
        type: Boolean,
        required: true,
        default: true,
    }, 
});

/*
Connects launchesSchema with the 'launches' collection!

Mongoose makes the name of the collection plural and lowercased based on the model name. 
So, for a model named 'Launch', the collection name would be 'launches'.

I could name the model 'launches', but then Mongoose would still 
pluralize it for the collection name, resulting in 'launcheses'

*/

module.exports = mongoose.model('Launch', launchesSchema);

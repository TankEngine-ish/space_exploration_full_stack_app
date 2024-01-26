const mongoose = require('mongoose');


const planetSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    },
});

// when renaming kepler_name to keplerName in the front-end's Launch.js
// we need to npm run deploy again


module.exports = mongoose.model('Planet', planetSchema);
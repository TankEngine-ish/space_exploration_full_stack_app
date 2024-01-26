const mongoose = require('mongoose');

const MONG0_URL = 'mongodb+srv://dead_space_API:TSXPZE1RQR37doEb@deadspace.bgihqg0.mongodb.net/DeadSpace?retryWrites=true&w=majority';


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});


mongoose.connection.on('error', (err) => {
    console.error(err);
});



async function mongoConnect () {
    await mongoose.connect(MONG0_URL);
}


async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,

}
const http = require ('http');
const mongoose = require ('mongoose');

const app = require ('./app');

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const MONG0_URL = 'mongodb+srv://dead_space_API:TSXPZE1RQR37doEb@deadspace.bgihqg0.mongodb.net/DeadSpace?retryWrites=true&w=majority';

const server = http.createServer(app);


async function startServer () {
    await mongoose.connect(MONG0_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });

    //these options are for mongoose to use the updated way of talking to clusters in mongodb.
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();








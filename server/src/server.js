const http = require ('http');


const app = require ('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model')


const PORT = process.env.PORT || 8000;

const MONG0_URL = 'mongodb+srv://dead_space_API:TSXPZE1RQR37doEb@deadspace.bgihqg0.mongodb.net/DeadSpace?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});


mongoose.connection.on('error', (err) => {
    console.error(err);
});


async function startServer () {
    await mongoConnect();
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
});
}

startServer();








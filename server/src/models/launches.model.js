const launchesDatabase = require('./launches.mongo');

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('december 27, 2030'),
    target: 'Kepler-442b',
    customers: ['Plamen', 'Nelly'],
    upcoming: true,
    success: true,
};

saveLaunch(launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

async function getAllLaunches() {
    return await launchesDatabase
    .find({}, { '_id': 0, '__v': 0 });
}

async function saveLaunch(launch) {
    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber,
  
    }, launch, {
        upsert: true,
    })
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['Plamen', 'Nelly'],
            flightNumber: latestFlightNumber,
    })
    );
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
}

// exports follow same order as the order of function definitions
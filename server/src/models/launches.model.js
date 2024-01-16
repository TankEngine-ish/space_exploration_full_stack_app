const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('december 27, 2030'),
    destination: 'Kepler-442b',
    customer: ['Plamen', 'Nelly'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
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

module.exports = {
    getAllLaunches,
    addNewLaunch,
}
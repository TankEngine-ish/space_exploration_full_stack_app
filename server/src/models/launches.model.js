const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('december 27, 2030'),
    destination: 'Kepler-442b',
    customers: ['Plamen', 'Nelly'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
}
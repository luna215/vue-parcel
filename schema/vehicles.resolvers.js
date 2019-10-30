const debug = require('debug')('vehicles.resolvers');

const { vehicles } = require('./fakeDB');

module.exports.vehicleResolvers = {
    Query: {
        getVehicles: (parent, args, context, info) => {
            debug('Vehicles:', vehicles);
            return vehicles;
        },
        getVehicleById: (parent, args, ) => {
            const { vehicleId } = args;
            const vehicle = vehicles.filter(vehicle => vehicle.vehicleId === vehicleId);
            debug('Vehicle:', vehicle[0]);
            return vehicle[0];
        }
    },
};
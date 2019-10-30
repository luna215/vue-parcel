module.exports.vehicleTypeDefs = `
    extend type Query {
        getVehicles: [Vehicle]
        getVehicleById(vehicleId: Int): Vehicle
    }

    type Vehicle {
        vehicleId: Int
        make: String
        model: String
        year: Int
        vin: String
        state: String
        accountId: Int
    }
`;
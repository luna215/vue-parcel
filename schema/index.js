const { gql } = require('apollo-server-express');

const { makeExecutableSchema } = require('graphql-tools');
const merge = require('lodash.merge');
const { usersTypeDefs } = require('./users.typedefs');
const { accountsTypeDefs } = require('./accounts.typedefs');
const { vehicleTypeDefs } = require('./vehicles.typedefs');

const { usersResolvers } = require('./users.resolvers');
const { accountsResolvers } = require('./accounts.resolvers');
const { vehicleResolvers } = require('./vehicles.resolvers');

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = merge(usersResolvers, accountsResolvers, vehicleResolvers);

module.exports.schema = makeExecutableSchema({
    typeDefs: [Query, usersTypeDefs, accountsTypeDefs, vehicleTypeDefs],
    resolvers
});
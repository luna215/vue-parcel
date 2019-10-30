const debug = require('debug')('accounts.resolvers');

const { users, userAccountLink, accounts, vehicles } = require('./fakeDB');

module.exports.accountsResolvers = {
    Query: {
        getAccounts: (parent, args, context, info) => {
            debug('Accounts:', accounts);
            return accounts;
        },
        getAccountById: (parent, args, context, info) => {
            const { accountId } = args;
            debug('Account:', accounts.filter(account => account.accountId === accountId))
            return accounts.filter(account => account.accountId === accountId)[0];
        },
    },
    Account: {
        usersAssociated: (parent, args, context, info) => {
            const { accountId } = parent;
            
            let listOfUsers = [];
            userAccountLink.filter((element) => {
                if(element.accountId === accountId) {
                    return users.filter(user => {
                        if(user.userId === element.userId) {
                            listOfUsers.push(user);
                        }
                    });
                }
            });
            debug("List of Users:", listOfUsers);
            return listOfUsers;
        },
        vehicles: (parent, args, context, info) => {
            const { accountId } = parent;
            debug('Getting vehicles for account:', accountId);
            return vehicles.filter(vehicle => vehicle.accountId === accountId);
        }
    }
}
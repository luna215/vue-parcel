const debug = require('debug')('users.resolvers');

const { users, userAccountLink, accounts } = require('./fakeDB');

module.exports.usersResolvers = {
    Query: {
        getUsers: (parent, args, context, info) => {
            debug('Users:', users);
            return users;
        },
        getUserById: (parent, args, context, info) => {
            const { userId } = args;
            const user = users.filter(user => user.userId === userId);
            debug('User:', user);
            return user[0];
        },
    },
    User: {
        accounts: (parent, args, context, info) => {
            const { userId } = parent;
            let userAccounts = []; 
            userAccountLink.filter((element) => {
                if(element.userId === userId) {
                    return accounts.filter(account => {
                        if(account.accountId === element.accountId) {
                            userAccounts.push(account);
                        }
                    });
                }
            });
            debug(`Account:`, userAccounts);
            return userAccounts
        }
    }
};
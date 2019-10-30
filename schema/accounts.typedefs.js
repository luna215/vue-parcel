module.exports.accountsTypeDefs = `
    extend type Query {
        getAccounts: [Account]
        getAccountById(accountId: Int): Account
    }

    type Account {
        accountId: Int
        accountName: String
        accountDisplayName: String
        createdOn: String
        usersAssociated: [User]
        vehicles: [Vehicle]
    }
`
module.exports.usersTypeDefs = `
    extend type Query {
        hello: String
        getUsers: [User]
        getUserById(userId: Int): User
        getUserAccountsByUserId(userId: Int): [Account]
    }

    type User {
        userId: Int
        emailAddress: String
        accounts: [Account]
    }
`
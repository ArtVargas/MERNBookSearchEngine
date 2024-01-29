const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
_id: ID!
username: String
email: String
password: String
savedBooks: [Book]!
}

type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    
    }

    type Auth {
        token: ID!
        user: User
        }
        
        type Query {
        user: User
        }

        type Mutation {
            login(email: String!, password: String!): Autho
            addUser(username: String!, email: String!, password: String!): Auth
            saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User
            deleteBook(bookId: String): User
            }
            `;
            module.exports = typeDefs;
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    createdAt: String!
  }

  type Message {
    _id: ID!
    senderId: ID!
    receiverId: ID!
    content: String!
    createdAt: String!
  }

  type Match {
    _id: ID!
    user1Id: ID!
    user2Id: ID!
    createdAt: String!
  }

  type Query {
    users: [User]
    messages: [Message]
    matches: [Match]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createUser(username: String!, createdAt: String!): User
    addUser(username: String!, email: String!, password: String!): Auth
    deleteUser(userId: ID): User
    createMessage(
      senderId: ID!
      receiverId: ID!
      content: String!
      createdAt: String!
    ): Message
    createMatch(user1Id: ID!, user2Id: ID!, createdAt: String!): Match
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

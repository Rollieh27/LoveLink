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

  type Mutation {
    createUser(username: String!, createdAt: String!): User
    createMessage(
      senderId: ID!
      receiverId: ID!
      content: String!
      createdAt: String!
    ): Message
    createMatch(user1Id: ID!, user2Id: ID!, createdAt: String!): Match
  }
`;

module.exports = typeDefs;

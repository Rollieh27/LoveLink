const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    age: Int
    gender: String
    interests: String
    profile: String
    pictures: String
  }

  type Message {
    _id: ID!
    senderId: ID!
    receiverId: ID!
    content: String!
  }

  type Match {
    _id: ID!
    user1Id: ID!
    user2Id: ID!
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
input userInput {
  age: Int
  gender: String
  interests: String
  profile: String
  pictures: String
}
  type Mutation {
    createUser(username: String!, createdAt: String!): User
    addUser(username: String, email: String!, password: String!): Auth
    deleteUser(userId: ID): User
    createMessage(
      senderId: ID!
      receiverId: ID!
      content: String!
    ): Message
    createMatch(user1Id: ID!, user2Id: ID!, createdAt: String!): Match
    updateUser(user: userInput!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

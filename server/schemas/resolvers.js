const { AuthenticationError } = require("apollo-server-express");
const { User, Match, Message } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: () => users,
    messages: () => messages,
    matches: () => matches,
  },

  Mutation: {
    // ----- not how users are created with sequelize
    createUser: (_, { username, createdAt }) => {
      const newUser = {
        _id: String(users.length + 1),
        username,
        createdAt,
      };
      users.push(newUser);
      return newUser;
    },
    // ----- dont use
    deleteUser: (_, { userId }) => {
      const userIndex = users.findIndex((user) => user._id === userId);

      if (userIndex === -1) {
        throw new Error("User not found.");
      }

      const deletedUser = users.splice(userIndex, 1)[0];
      return deletedUser;
    },
    createMessage: (_, { senderId, receiverId, content, createdAt }) => {
      const newMessage = {
        _id: String(messages.length + 1),
        senderId,
        receiverId,
        content,
        createdAt,
      };
      messages.push(newMessage);
      return newMessage;
    },
    createMatch: (_, { user1Id, user2Id, createdAt }) => {
      const newMatch = {
        _id: String(matches.length + 1),
        user1Id,
        user2Id,
        createdAt,
      };
      matches.push(newMatch);
      return newMatch;
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

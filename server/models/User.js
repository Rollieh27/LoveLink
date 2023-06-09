const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"],
      },
      password: {
        type: String,
        required: true,
      },

      age: {
        type: Number,
      },

      dob: {
        type: String
      },

      gender: {
        type: String,
      },
      interests: {
        type: String,
      },
      profile: {
        type: String,
      },
      pictures:{
        type: String,
      }
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

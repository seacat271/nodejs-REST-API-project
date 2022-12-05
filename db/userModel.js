const mongoose = require('mongoose');
const { modifyPassword } = require('../helpers/cryptPassword');

const userSchema = new mongoose.Schema({
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: String,
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  })

  userSchema.pre('save', async function () {
    if(this.isNew) {
      this.password = await modifyPassword(this.password)
    }
  })

  const User = mongoose.model('users', userSchema);

  module.exports = {
      User
  }

const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create the Schema
const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
    default:
      "https://res.cloudinary.com/geekysrm/image/upload/v1542221619/default-user.png",
  },
})

module.exports = User = mongoose.model("users", UserSchema)

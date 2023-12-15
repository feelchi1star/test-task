const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please enter your name"] },
  sectors: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sector" }],
    required: [true, "Pick the Sectors you are currently involved in "],
    validate: [
      {
        validator: function (value) {
          return value.length > 0; // Minimum length of 1
        },
        message: "At least 1 sectors are required.",
      },
    ],
  },

  agreeToTerms: {
    type: Boolean,
    required: [true, "Agree to terms"],
    validate: {
      validator: (v) => v === true,
      message: "You must agree to the terms.",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

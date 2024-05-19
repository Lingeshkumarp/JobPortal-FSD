const mongoose = require('mongoose');

// Define the schema for the profile
const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Ensure email is unique
  },
  phone: {
    type: String,
    required: true, // Phone number is required
  },
  experience: {
    type: String,
    required: true, // Experience level is required
    enum: ['beginner', 'experienced'], // Experience must be one of these values
  },
  resume: {
    type: String, // Stores the filename of the uploaded resume
    required: true, // Resume upload is required
  },
});

// Create the model from the schema
const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;

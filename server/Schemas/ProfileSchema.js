const mongoose = require('mongoose');

// Schema for user profile data
const profileSchema = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  avatar: "https://via.placeholder.com/150", 
  social: {
    leetcode: "https://leetcode.com/johndoe",
    codechef: "https://codechef.com/johndoe",
    github: "https://github.com/in/johndoe",
  },
};


module.exports = mongoose.model('Profile', profileSchema);

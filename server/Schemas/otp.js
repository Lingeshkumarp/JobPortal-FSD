const mongo  = require('mongoose')
const OtpSchema = new mongoose.Schema({
    email: String,
    otp: String,
  });
  const otp  = mongo.model('otp',OtpSchema)
  module.exports ={otp}  
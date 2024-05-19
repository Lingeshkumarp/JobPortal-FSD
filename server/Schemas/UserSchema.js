const mongo  = require('mongoose')

const UserSchema = new mongo.Schema({
    username:{
        type:String,
        required:true,
        unique: [true, "Username Exist"]
    }
    ,
    email:{
        type:String,
        required:true,
        unique: [true,"Email Already exists"]
    },
    password:{
        type:String,
        required:true,
        unique : false,
    }
})
const User  = mongo.model('User',UserSchema)
module.exports ={ User }
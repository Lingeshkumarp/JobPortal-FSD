const mongo  = require('mongoose')

const DataSchema = new mongo.Schema({
    image:{
        type:String,
        required:true
    },
    title:{  
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
},{
    timestamps:true
})
const Data  = mongo.model('Data',DataSchema)
module.exports ={Data}
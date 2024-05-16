const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const { User } =require("./Schemas/UserSchema")
//const { Profile } =require('./Schemas/ProfileSchema')
const multer = require("multer")
const path = require("path")
require("dotenv").config()

app.use(cors())
app.use(bodyparser.json())

async function connectTodb(){
    try {
        await mongoose.connect(process.env.mongo_url)
        const port = process.env.PORT || 4000
        console.log("DB CONNECTED SUCCESSFULLY")
        app.listen(port,()=>{
            console.log("connect to port "+port)
        })
    } catch (error) {
        console.error(error)
        console.log("NOT CONNECTED")
    }
     
}
connectTodb();

app.get('/',(req,res)=>{
    res.json({message:"NODE SERVER"})
})
app.post('/signup',async(req,res)=>{
 const {username,email,password} = req.body
 try {
    await User.create(
        {
        "username":username,
        "email":email,
        "password":password
        }
            )
            res.status(201).json({status:"success",message:"Created user"})
            console.log("Signup user details: "+"USER : "+username+ " EMAIL : " +email+" PASSWORD : "+password)
            
 } catch (error) {
    console.log(error)
    res.status(500).json({status:"fail",message:"Unable to Create user"})
 }
})

app.post('/login',async(req,res)=>{
    try {
        console.log(req.body)
       const userDoc =  await User.findOne({
            "email":req.body.email
        })
        
        if(userDoc){
            if(userDoc.password === req.body.password){
                res.status(200).json({message:"login successful"})
            }
            else{
                res.status(401).json({message:"invalid credentials"})
            }
        }else{
            res.status(401).json({message:"user doesnt exist"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"not logged in"})
    }
})

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"images")
    },
    filename:(req,file,callback)=>{
        callback(null,req.body.name)
    }
})

const upload = multer({storage:storage})
app.post("/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})

//otp
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/otp_verification', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a mongoose schema and model for OTP
// const otpSchema = new mongoose.Schema({
//   email: String,
//   otp: String,
// });
// const OTP = mongoose.model('OTP', otpSchema);

// // Route to generate and send OTP
// app.post('/api/send-otp', async (req, res) => {
//   const { email } = req.body;
//   const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });

//   try {
//     // Save OTP to the database
//     await OTP.create({ email, otp });
//     // In a real application, you would send this OTP to the user's email or phone
//     console.log(`OTP sent to ${email}: ${otp}`);
//     res.status(200).json({ success: true, message: 'OTP sent successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to send OTP' });
//   }
// });

// // Route to verify OTP
// app.post('/api/verify-otp', async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     // Check if OTP exists in the database
//     const existingOTP = await OTP.findOne({ email, otp });
//     if (existingOTP) {
//       // If OTP exists, delete it from the database
//       await OTP.deleteOne({ email, otp });
//       res.status(200).json({ success: true, message: 'OTP verified successfully' });
//     } else {
//       res.status(400).json({ success: false, message: 'Invalid OTP' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Failed to verify OTP' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// //PROFILE

// // backend/server.js



// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/profiles', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a mongoose schema for profile
// const profileSchema = new mongoose.Schema({
//   name: String,
//   bio: String,
// });

// const Profile = mongoose.model('Profile', profileSchema);

// // Route to get profile
// app.get('/api/profile', async (req, res) => {
//   try {
//     const profile = await Profile.findOne();
//     res.json(profile);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Route to create profile
// app.post('/api/profile', async (req, res) => {
//   try {
//     const { name, bio } = req.body;
//     const profile = new Profile({ name, bio });
//     await profile.save();
//     res.status(201).json(profile);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

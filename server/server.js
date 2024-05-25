const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const { User } =require("./Schemas/UserSchema")
const { Data } =require("./Schemas/DataSchema")
const Profile  =require('./Schemas/ProfileSchema')
const multer = require("multer")
const path = require("path")
const cookieparser = require("cookie-parser")
const jwt = require("jsonwebtoken")
require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use(cookieparser())

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
                // const token = 
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

//profile upload
 app.post('/profile',(req,res) => {
    Profile.create(req.body)
    .then(ProfileTransfer => res.json(ProfileTransfer))
    .catch(error => res.json(error))
 })

//data upload

app.get('/getalldata',async (req, res) => {
    try {
      const data = await Data.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// app.post('/profiles', upload.single('resume'), async (req, res) => {
//   const { name, email, phone, experience } = req.body;
//   const resume = req.file.filename;
//   try {
//     const profile = new Profile({ name, email, phone, experience, resume });
//     await profile.save();
//     res.status(201).json(profile);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.get('/profiles', async (req, res) => {
//   try {
//     const profiles = await Profile.find();
//     res.status(200).json(profiles);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get('/profiles/:id', async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) return res.status(404).json({ error: 'Profile not found' });
//     res.status(200).json(profile);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put('/profiles/:id', upload.single('resume'), async (req, res) => {
//   const { name, email, phone, experience } = req.body;
//   const resume = req.file ? req.file.filename : undefined;
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) return res.status(404).json({ error: 'Profile not found' });

//     profile.name = name || profile.name;
//     profile.email = email || profile.email;
//     profile.phone = phone || profile.phone;
//     profile.experience = experience || profile.experience;
//     if (resume) profile.resume = resume;

//     await profile.save();
//     res.status(200).json(profile);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.delete('/profiles/:id', async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     if (!profile) return res.status(404).json({ error: 'Profile not found' });

//     await profile.remove();
//     res.status(200).json({ message: 'Profile deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// //profile

// // Load environment variables from .env file
// dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.mongo_url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Routes
// app.get('/data', async (req, res) => {
//   try {
//     const data = await Data.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/data/:id', async (req, res) => {
//   try {
//     const data = await Data.findById(req.params.id);
//     if (!data) {
//       return res.status(404).json({ message: 'Data not found' });
//     }
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post('/data', async (req, res) => {
//   const { image, title, location, desc, company } = req.body;

//   const newData = new Data({
//     image,
//     title,
//     location,
//     desc,
//     company,
//   });

//   try {
//     const savedData = await newData.save();
//     res.status(201).json(savedData);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.put('/data/:id', async (req, res) => {
//   try {
//     const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!updatedData) {
//       return res.status(404).json({ message: 'Data not found' });
//     }
//     res.json(updatedData);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.delete('/data/:id', async (req, res) => {
//   try {
//     const deletedData = await Data.findByIdAndDelete(req.params.id);
//     if (!deletedData) {
//       return res.status(404).json({ message: 'Data not found' });
//     }
//     res.json({ message: 'Data deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });


// mongoose.connect('', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const ProfileSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   experience: String,
//   resume: String,
// });

// const Profile = mongoose.model('Profile', ProfileSchema);

// // Configure Multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // API endpoint to handle form submission
// app.post('/api/profile', upload.single('resume'), async (req, res) => {
//   try {
//     const { name, email, phone, experience } = req.body;
//     const resume = req.file.filename;

//     const profile = new Profile({
//       name,
//       email,
//       phone,
//       experience,
//       resume,
//     });

//     await profile.save();
//     res.status(201).json({ message: 'Profile created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Serve static files (Resume uploads)
// app.use('/uploads', express.static('uploads'));

// // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });


// //router
// const router = Router();

// /** import all controllers */
// import * as controller from './controllers/appControllers.js';
// import { registerMail } from './controllers/mailer.js'
// import Auth, { localVariables } from '.middleware/auth.js';



// /** POST Methods */
// router.route('/register').post(controller.register); // register user
// router.route('/registerMail').post(registerMail); // send the email
// router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
// router.route('/login').post(controller.verifyUser,controller.login); // login in app

// /** GET Methods */
// router.route('/user/:username').get(controller.getUser) // user with username
// router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
// router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
// router.route('/createResetSession').get(controller.createResetSession) // reset all the variables


// /** PUT Methods */
// router.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile
// router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password

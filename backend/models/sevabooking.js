// // const sevabookingschema=require('../controllers/sevacontroller')
// // const createseva=async(req,res)=>
// // {
// //     try{
// //         const{name,email,mobilenumber, Transactionid}=req.body 
// //         const sevabooking = new sevabooking(
// //             {
// //                 name,
// //                 email,
// //                 mobilenumber,
// //                 Transactionid
// //             })
// //         await sevabooking.save()
// //         res.status(201)
// //     }
// //     catch(error)
// //     {
// //         console.log(error)
// //         res.status(500).json({message:"server error"})
// //     }

// // }
// // module.exports = { createseva }
// // models/sevabooking.js
// const mongoose = require("mongoose");

// const sevabookingschema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   mobileNumber: {
//     type: Number,
//     required: true,
//   },
//   Transactionid: {
//     type: Number,
//     required: true,
//   },
// });

// module.exports = mongoose.model("sevabooking", sevabookingschema);
// models/sevabooking.js
const mongoose = require("mongoose");

const sevabookingschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  date:
  {
    type:Date,
    required:true
  },
  transactionId: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("SevaBooking", sevabookingschema);


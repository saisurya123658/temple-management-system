// const { Transaction } = require("mongodb")
// const mongoose=require("mongoose")
// const sevabookingschema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//      email:{
//         type:String,
//         required:true
//     },
//      mobileNumber:{
//         type:Number,
//         required:true
//     },
//     Transactionid:{
//         type:Number,
//         required:true
//     },
// }
// )
// module.exports=mongoose.model("sevabooking",sevabookingschema)
// controllers/sevacontroller.js
// controllers/sevacontroller.js
// const SevaBooking = require("../models/sevabooking");

// exports.bookSeva = async (req, res) => {
//   try {
//     const { name, email, mobileNumber, transactionId } = req.body;

//     if (!name || !email || !mobileNumber || !transactionId) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newBooking = new SevaBooking({ name, email, mobileNumber, transactionId });
//     const savedBooking = await newBooking.save();

//     res.status(201).json({
//       message: "Seva booked successfully",
//       data: savedBooking
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error booking seva",
//       error: error.message
//     });
//   }
// };


const sevabooking = require("../models/sevabooking");
const SevaBooking = require("../models/sevabooking");

exports.bookSeva = async (req, res) => {
  try {
    const { name, email, mobileNumber, transactionId, date } = req.body;

    // Basic validation
    if (!name || !email || !mobileNumber || !transactionId || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Optional: Validate date format (YYYY-MM-DD)
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD." });
    }

    // Create new booking
    const newBooking = new SevaBooking({
      name,
      email,
      mobileNumber,
      transactionId,
      date: parsedDate
    });

    const savedBooking = await newBooking.save();

    res.status(201).json({
      message: "Seva booked successfully",
      data: savedBooking
    });

  } catch (error) {
    res.status(500).json({
      message: "Error booking seva",
      error: error.message
    });
  }
};
exports.getseva= async(req,res)=>
{
  try
  {
    const sevas = await SevaBooking.find()
    res.status(200).json(sevas)
  }
  catch(err)
  {
    console.log(err)
    res.status(500).json({"message":"server error"})
  }

}
exports.updateseva = async(req,res)=>
{
  try{
    const updatesevas = new sevabooking.findById()
    res.status(200).json(updatesevas)
  }
  catch(err)
  {
    console.log(err)
    res.status(500).json({"message":"server error"})
  }

}
exports.deleteseva = async(req,res)=>
{
  try{
    const deleteseva = await sevabooking.findByIdAndDelete(req.parmas.id)
    res.status(200).send() }
    catch(err)
  {
    console.log(err)
    res.status(500).json({"message":"server error"})
  }
}
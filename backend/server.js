// // // const express = require("express")
// // // const dotenv=require("dotenv")
// // // const app=express();
// // // const PORT=5000
// // // const { MangoClient }=require('mangodb')
// // // dotenv.config()

// // // MangoClient.connect(process.env,MONGO_URI)
// // // .then(()=>
// // // {
// // //     console.log("db connected")

// // // })
// // // .catch((err)=>
// // // {
// // //     console.log(err)
// // // })
// // // app.listen(PORT,()=>
// // // {
// // //     console.log(`server running on ${PORT}`)
// // // })
// // const express = require("express");
// // const dotenv = require("dotenv");
// // const { MongoClient } = require("mongodb");

// // dotenv.config();

// // const app = express();
// // const PORT = 5000;
// // const uri = process.env.MONGO_URI;

// // MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(client => {
// //     console.log("DB connected");
// //   })
// //   .catch(err => {
// //     console.error("Connection failed:", err);
// //   });

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const sevaroutes=require("./Routes/sevaroutes")

// const app = express();
// dotenv.config();
// app.use(bodyParser.json())
// app.use(express.json())

// const PORT = process.env.PORT || 6000;
// const uri = process.env.MONGO_URI;

// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//   console.log("MongoDB connected");
// })
// .catch((err) => {
//   console.error("Connection failed:", err.message);
// });
// app.use("/sevabooking",sevaroutes)

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const sevaRoutes = require("./Routes/sevaroutes");
const ejs=require("ejs")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine","ejs")
app.use(bodyParser.json());
app.use("/api/seva", sevaRoutes);
app.use("/garpes",(req,res)=>
{
res.render('sample')
})
app.get("/",(req,res)=>
{
  res.send("server running")
})
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection failed:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

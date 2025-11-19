// // const express=require("express")
// // const router=express.Router()
// // const sevacontroller=require("../controllers/sevacontroller")
// // const seva=require("../models/seva")
// // router.post("/add-seva",sevacontroller.sevabookingschema)
// // module.exports= router
// const express = require("express");
// const router = express.Router();
// const sevacontroller = require("../controllers/sevacontroller");

// router.post("/add-seva", sevacontroller.sevabookingschema);

// module.exports = router;
// Routes/sevaroutes.js
const express = require("express");
const router = express.Router();
const sevaController = require("../controllers/sevacontroller");

router.post("/add-seva", sevaController.bookSeva);
router.get("/getseva",sevaController.getseva)
router.put("/putseva",sevaController.updateseva)
router.delete("/delete/:id",sevaController.deleteseva)
module.exports = router;


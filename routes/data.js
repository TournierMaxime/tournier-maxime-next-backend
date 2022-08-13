// LIBRAIRIES
const express = require("express");
const router = express.Router();

// CONTROLLERS
const dataCtrl = require("../controllers/data.js");
//ROUTES
router.get("/", dataCtrl.getAllData);
router.get("/:id", dataCtrl.getOneData);

module.exports = router;

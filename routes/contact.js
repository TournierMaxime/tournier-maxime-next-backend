// LIBRAIRIES
const express = require("express");
const router = express.Router();

// CONTROLLERS
const contactCtrl = require("../controllers/contact.js");
//ROUTES
router.post("/", contactCtrl.form);

module.exports = router;

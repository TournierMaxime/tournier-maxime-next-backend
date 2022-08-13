//Dependances
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
//Routes
const dataRoutes = require("./routes/data.js");
const contactRoutes = require("./routes/contact.js");

//Utilisation d'express
const app = express();
//Protection des en-tetes headers
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
//CORS
app.use(cors());

app.use(express.json());

//Middleware pour l'authentification
app.use("/api/data", dataRoutes);
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  return res.send("Hello World");
});

module.exports = app;

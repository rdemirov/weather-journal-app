const bodyParser = require("body-parser");
const express = require("express");

const PORT = 8000;
const API_KEY = "f431e120bd4540232e3e236f64140b6d";

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// create DB connection

// setup express and mongoose

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect middleware
app.use("/", (req, res, next) => {
	res.send("It is Working");
});

// connect to mongoDB
mongoose
	.connect(
		"mongodb+srv://abkMERN02:ij8eRUNHAE85zCiY@cluster0.ofrmvez.mongodb.net/"
	)
	.then(() => console.log("Connected to MongoDB"))
	.then(() => {
		app.listen(5000);
	})
	.catch((err) => console.log(err));

// create DB connection

const express = require("express"); // setup express mongoose
const mongoose = require("mongoose"); // setup mongoose
const router = require("./Routes/UserRoutes"); // insert route

const app = express();

// connect middleware
app.use("/users", router);

// connect to mongoDB
/*Creates an instance of an Express application, which will be used to define routes and middleware. */
mongoose
	.connect(
		"mongodb+srv://abkMERN02:@cluster0.ofrmvez.mongodb.net/"
	)
	.then(() => console.log("Connected to MongoDB"))
	.then(() => {
		app.listen(5000);
	})
	.catch((err) => console.log(err));

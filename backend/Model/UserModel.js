// Create user model

const mongoose = require("mongoose"); // add mongoose
const Schema = mongoose.Schema; // assign mongoose to schema

const userSchema = new Schema({
	name: {
		type: String, // data type
		required: true, // validation
	},

	gmail: {
		type: String, // data type
		required: true, // validation
	},

	age: {
		type: Number, // data type
		required: true, // validation
	},

	address: {
		type: String, // data type
		required: true, // validation
	},
});

// export the model

module.exports = mongoose.model(
	"UserModel", // filename
	userSchema // function name
);

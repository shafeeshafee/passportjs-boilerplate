const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Item = new Schema(
	{
		title: { type: String, required: true },
		price: { type: Number, required: true },
		image: { type: String, required: true },
	},
	{ timestamps: true }
);
module.exports = mongoose.model("items", Item);

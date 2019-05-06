const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    link: { type: String, required: false },
    date: { type: Date, default: Date.now } 
});

const Portfolio = mongoose.model("Blog", portfolioSchema);

module.exports = Blog;
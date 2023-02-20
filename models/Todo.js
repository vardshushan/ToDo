const mongoose = require("mongoose");
//create schema for to do
const TodoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    }
})

module.exports = new mongoose.model("Todo", TodoSchema);
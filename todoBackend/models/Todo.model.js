const {express} = require("express");
const {mongoose} = require("mongoose");

const todoSchema = mongoose.Schema({
    text: String,
    completed: {
        type: Boolean,
        default: false,
    }
})

const toDo = mongoose.model("toDo", todoSchema);

module.exports = toDo;
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


var AuthorsSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is required"],
        minlength: [2, "no more than 25"],
        maxlength: [25, "no more than 25"],
        unique: true
    }
},{timestamps: true});


AuthorsSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
mongoose.model('Authors', AuthorsSchema);
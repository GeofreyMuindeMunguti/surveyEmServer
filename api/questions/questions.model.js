const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const questionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  surveyId: String,
  question: String,
   open_question: Boolean,
   multiple_choice: Boolean,
   choice_type: Boolean,
   position: Number,
   choices: []


});

// model
const Question = Model('Question', questionSchema);

module.exports = { Question : Question };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const surveySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true }


});

// model
const Survey = Model('Survey', surveySchema);

module.exports = { Survey : Survey };

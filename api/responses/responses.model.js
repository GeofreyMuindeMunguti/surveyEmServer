const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const responseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  surveyId: String,
  userId: String,
  companyProfileId: String,
	answers:[{
		questionId: String,
		answer: String
	}]

});

// model
const Response = Model('Response', responseSchema);

module.exports = { Response : Response };

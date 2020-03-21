const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const responseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  surveyId: {type: Schema.Types.ObjectId},
  userId: {type: Schema.Types.ObjectId},
  companyId: {type: Schema.Types.ObjectId},
	answers:[{
		questionId: String,
		answer: String
	}]

});

// model
const Response = Model('Response', responseSchema);

module.exports = { Response : Response };

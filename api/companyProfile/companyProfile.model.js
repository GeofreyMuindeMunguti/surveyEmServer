const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const companyProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  companyName: String,
  logo: {url: String, name: String},
  numberOfEmployees: Number,
  companyType: String,
  companyWebsite: String,

});

// model
const CompanyProfile = Model('CompanyProfile', companyProfileSchema);

module.exports = { CompanyProfile : CompanyProfile };

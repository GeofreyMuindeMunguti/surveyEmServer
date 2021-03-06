const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;
const Model = mongoose.model;


// Schema
const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  companyId: String,
  password: String,
  email: String,
  userType: String
});

userSchema.pre('save', function (next) {
    if(this.password) {
        if(this.isModified('password') || this.isNew) {

                this.hash(this.password, (hashErr, hash) => {
                    if(hashErr) {
                        return next(hashErr);
                    }
                    this.password = hash;
                    return next();
                });

        }
        else {
            return next();
        }
    }
    else {
        return next();
    }
});

userSchema.methods = {
    hash(password, callback){
        return bcrypt.hash(password,null, null, function(err, hash){
            if(err) {
                return callback(err);
            }
            else {

                return callback(null, hash)
            }
        });
},
authenticate(password, callback){
    bcrypt.compare(password, this.password, function(err, result) {
        if(err) {
            return callback(err);
        }
        console.log(result)
        callback(null, result);
    });
}
}

// model
const User = Model('User', userSchema);

module.exports = { User : User };

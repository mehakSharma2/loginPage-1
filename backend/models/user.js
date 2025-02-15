const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        reuired:true,
    },
    email:{
        type:String,
        reuired:true,
        unquie:true,
    },
    password:{
        type:String,
        reuired:true,
    },
});

const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;
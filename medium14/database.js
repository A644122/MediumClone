const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/userdetails');
const { Schema } = mongoose;

 const UserSchema= new Schema({
    Username:String,
    password:String

})
// const connection=
const Users = mongoose.model('Users',UserSchema);

module.exports = Users;



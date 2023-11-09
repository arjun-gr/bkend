const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/playground")
  .then(()=> console.log("Connected"))
  .catch((error)=> console.log("Error 404"))

const schema = new mongoose.Schema({
  email:{
    type:String,
    unique:true
  },
  password:String,
  posts:[{type:String}]
})

const model = mongoose.model("user",schema);

module.exports = model;
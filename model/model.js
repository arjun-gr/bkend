const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)
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
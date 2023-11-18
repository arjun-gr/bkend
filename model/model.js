const mongoose = require("mongoose");
// process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log("Connected DB"))
  .catch((error)=> console.log("Error connecting to DB"))

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
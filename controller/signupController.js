const model = require('../model/model.js')

function signupController(req,res){
  res.render("pages/signup")
}

async function signupNewController(req,res){
  if(!req.body){
    res.render("pages/signup", {prompt:'Email Password required'})
  }
  else{
    try{
      const user = new model({
        email:req.body.email,
        password:req.body.password
      })
      await user.save()
      res.render("pages/signup", {prompt:"User saved, Please Login"})
    }
    catch(error){
      if(error.code === 11000){
        res.render("pages/signup", {error:"User already exists"})
      }
      else{
        res.render("pages/signup",{error:"Something went wrong"})
      }
    }
  }

}

module.exports = {
  signupController,
  signupNewController
}
const model = require('../model/model.js')

function signupController(req,res){
  res.render("pages/signup")
}

async function signupNewController(req,res){
  if(!req.body){
    return res.status(404).send("Error")
  }
  else{
    const user = new model({
      email:req.body.email,
      password:req.body.password
    })

   let result =  await user.save()
    if(!result){
      console.log("Error saving")
    }
    else{
      console.log("Saved")
      res.send("Saved")
    }
  }


}

module.exports = {
  signupController,
  signupNewController
}
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

    await user.save()
    .then((savedData => {
      res.send('User saved')
    }))
    .catch(error=>{
      if(error.code === 11000){
        res.send("Duplicate value error")
      }
      else{
        res.send("Error saving user")
      }
    })
 
  }


}

module.exports = {
  signupController,
  signupNewController
}
const model = require('../model/model.js')
// const session = require('express-session')

function signInController(req,res){
  res.render('pages/signin')
}

async function signInPostController(req,res){
  // console.log(req.body)
  const {email, password} = req.body;
  const result =await model.findOne({email:email, password:password});
  if(!result){
    res.status(404).send("Incorrect email/password")
  }
  else{
    req.session.userData = email
    res.redirect("login/diary");
  }
}

function homeController(req,res){
  if(req.session.userData){
    res.render('pages/diary')
  }
  else{
    res.status(404).send("Unauthorized")
  }
}

function logoutController(req,res){
  req.session.destroy(err=>{
    if(err){
      res.status(404).send("Error logging out")
    }
    else{
      res.redirect("/")
    }
  })
}


module.exports = {signInController, signInPostController, homeController, logoutController};
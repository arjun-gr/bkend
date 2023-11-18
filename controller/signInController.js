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
    res.render("pages/signin", {prompt:"Invalid credentials"})
  }
  else{
    req.session.userData = email
    res.redirect("/diary");
  }
}

function homeController(req,res){
  if(req.session.userData){
    res.render('pages/diary')
  }
  else{
    res.render("pages/signin",{error:"Please sign in"})
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
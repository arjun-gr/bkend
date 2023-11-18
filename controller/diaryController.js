const model = require('../model/model')

function diaryHome(req,res){
  if(req.session.userData){
    res.render("pages/diary.ejs")
  }
  else{
    res.render("pages/login",{error:"Login first"})

  }
}

async function diaryContent(req,res){
  if(req.session.userData){
    let result =await model.findOneAndUpdate({email:req.session.userData}, {$push:{posts:req.body.diaryContent}})
    res.redirect('/diary')
  }
  else{
    res.render("pages/diary",{error:"Error Adding Data."})
  }
}

async function sendDairyContent(req,res){
  let result = await model.findOne({email:req.session.userData})
  if(!result){
    res.status(404).send("Login first")
  }
  else{
    res.send(result.posts)
  }
}

module.exports = {diaryHome, diaryContent, sendDairyContent};
const model = require('../model/model')

function diaryHome(req,res){
  if(req.session.userData){
    res.render("pages/diary.ejs")
  }
  else{
    res.status(404).send("Unauthorized")
  }
}

async function diaryContent(req,res){
  if(req.session.userData){
    let result =await model.findOneAndUpdate({email:req.session.userData}, {$push:{posts:req.body.diaryContent}})
    res.redirect('/login/diary')
  }
  else{
    res.status(404).send("unauthorized")
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
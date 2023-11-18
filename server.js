const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoutes");
const signupRouter = require("./routes/signupRoutes");
const singInRouter = require('./routes/signinRoutes');
const diaryRouter = require('./routes/diaryRoutes');
const session = require('express-session')


app.use(session({
  secret:'MysecretKey',
  resave:false,
  saveUninitialized:true
}))
app.use(express.static('public'))
app.use((req,res,next)=>{
  res.locals.userInfo = req.session.userData || null;
  next();
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login",singInRouter);
app.use("/diary", diaryRouter)

const port = process.env.port || 3000;
app.listen(port, () => console.log(`server started at: localhost:${port}`));

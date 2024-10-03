var express = require('express');
var router = express.Router();

const {sendMail} = require("../utils/sendmail")

const passport = require("passport")
const LocalStategy = require ("passport-local")
const UserCollection = require ("../models/user.schema")
const { isLoggedIn } = require ("../middleware/auth");


passport.use(new LocalStategy(UserCollection.authenticate()));



router.post("/register", async (req, res, next) => {
  try {
      const { username,password,email}  = req.body;
      const nonChangableData = { username, email };
      const encryptedData = password;
      await UserCollection.register(nonChangableData, encryptedData);
      res.redirect("/login");
  } catch (error) {
      console.log(error);
      res.send(error.message);
  }
});

// user login rahega is line se bottom router post

router.post(
"/login",
passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
}),
(req, res, next) => {}
);

router.get("/profile", isLoggedIn, async (req, res, next) => {
  res.render("profile", {
    title: "Profile | Socialmedia",
    user: req.user,
});
});

// router.post("/sendmail", function (req,res,next) {
//   sendMail(req,res)
// });

module.exports = router;

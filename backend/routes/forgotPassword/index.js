const crypto = require("crypto");
const router = require("express").Router();
const nodemailer = require("nodemailer");
const cryptoRandomString = require("crypto-random-string");
const mongoose = require("mongoose");

const UserSchema = require("../../models/User");

const newUserModel = mongoose.model("user", UserSchema);

router.post("/verifytoken", async (req, res) => {
  // Retrive token from URI
  // Query Database to find if token exists
  // If found, continue
  // Else return message invalid or expired token
  try {
    const response = await newUserModel.findOne({
      resetPasswordToken: req.body.token,
    });
    if (response === null) {
      res.json({ msg: "Token invalid or expired" });
    } else {
      res.json({
        msg: `welcome back ${response.fname} `,
        email: response.email,
      });
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
  console.log(req.body.token);
});

router.post("/sendmail", async (req, res) => {
  // retrieve email id from request
  // generate unique token
  // send email with unique token
  // append token to database

  const token = cryptoRandomString({ length: 64, type: "url-safe" });
  console.log(token);
  console.log(req.body.email);
  //   const response = await newUserModel.findOne({ email: req.body.email });
  var flag = true;
  try {
    const response = await newUserModel.findOneAndUpdate(
      { email: req.body.email },
      { resetPasswordToken: token },
      { useFindAndModify: false }
    );
    if (response === null) {
      flag = false;
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  if (!flag) {
    res.json({ msg: "User not found" });
  } else {
    try {
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "pranjal.2817254@piet.co.in",
          pass: process.env.GMAIL_PWD,
        },
      });
      let mailDetails = {
        from: "pranjal.2817254@piet.co.in",
        to: "pranjal.verma@daffodilsw.com",
        subject: "password reset",
        text: `You applied to reset your password. Please follow this link to http://localhost:3000/reset/${token}`,
      };
      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          res.json({ msg: "Error occured" });
          console.log(err);
        } else {
          res.json({ msg: "Email send successfull pls check your inbox" });
          console.log("Email sent successfully");
        }
      });
    } catch (error) {
      console.log(Error);
    }
  }
});

router.post("/resetpwd", async (req, res) => {
  // Find user and update password
  if (!req.body.email || !req.body.password) {
    res.json({ msg: "Invalid" });
  } else {
    try {
      console.log(req.body);
      const response = await newUserModel.findOneAndUpdate(
        { email: req.body.email, resetPasswordToken: req.body.token }, // Find by email
        { password: req.body.password, resetPasswordToken: "" }, // update password
        { useFindAndModify: false } // mandatory option
      );
      if (response === null) {
        res.json({ msg: "BAD REQUEST" });
      } else {
        res.json({ msg: "OK" });
      }
    } catch (error) {
      console.log(error);
    }
  }
});
module.exports = router;

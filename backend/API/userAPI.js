// API to handle creation of new user and login
const mongoose = require("mongoose");
const UserSchema = require("../models/User");

const newUserModel = mongoose.model("user", UserSchema);

const createNewUser = async (req, res) => {
  const { fname, lname, email, username, password } = req.body;

  newUserModel.find({ email: email }, async (err, result) => {
    if (err) {
      console.error(err);
      res.end("Error occured");
    } else if (result.length == 0) {
      let tempUser = newUserModel({ fname, lname, username, email, password });

      await tempUser
        .save()
        .then(res.status(200).send("sign up succesfull"))
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.send("email already exists");
      res.end();
    }
  });
  //   let tempUser = newUserModel({ fname, lname, username, email, password });
  //   await tempUser
  //     .save()
  //     .then(res.status(200).send(tempUser))
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

const checkUserExists = async (req, res) => {
  newUserModel.find({ email: req.body.email }, (err, result) => {
    if (err) {
      console.log(error);
      res.end("Error occured");
    }
    //console.log(result[0].password);
    if (result.length == 0) {
      res.end("no user with that email  found");
    } else if (result[0].password != req.body.password) {
      res.end("Incorrect password");
    } else {
      res.send("You are logged in");
      res.end();
    }
  });
};

module.exports = {
  createNewUser,
  checkUserExists,
};

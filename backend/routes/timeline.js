const router = require("express").Router();
const upload = require("../API/uploadPostAPI");
const UploadModel = require("../models/Post");
const fs = require("fs");

// Router for Timeline component
// Upload or Delete posts with caption

// @desc Upload new image
// @route POST /upload {data}
router.post("/upload", upload.single("pet"), async (req, res, next) => {
  // console.log(req.caption);

  console.log(req);

  if (!req.file) {
    res.send("Select a file");
    console.log("request without a file");
    res.end();
  } else {
    // console.log(req);
    const tempUser = UploadModel({
      user: req.body.email,
      caption: req.body.caption,
      image: req.file.filename,
      timestamp: new Date(),
    });

    try {
      tempUser.save();
      res.status(201);

      res.end();
      console.log("post created in db");
    } catch (error) {
      res.send("error occured");
      res.end();
      console.log(error);
    }
  }
  // const newUpload = await UploadModel({
  //     image: req.filename
  // })
});

// @desc retrieve all post
// @route POST /showpost
router.post("/showuploads", async (req, res) => {
  // console.log(req.body);
  // console.log(req.body);
  const response = [];
  // Query all posts from db where id matchers current user id in local storage.
  await UploadModel.find({ user: req.body.user }, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      for (let i = 0; i < result.length; i++) {
        response.push({
          image: result[i].image,
          user: result[i].user,
          time: result[i].timestamp,
          caption: result[i].caption,
        });
      }

      res.send(response.reverse());
      // console.log(response);
    }
  });
});

module.exports = router;

const router = require("express").Router();
const upload = require("../../API/uploadPostAPI");
const UploadModel = require("../../models/Post");
const fs = require("fs");
const { update } = require("../../models/Post");

const commentRoutes = require("./commentRoutes");
const likeRoutes = require("./likeRoutes");
// Router for Timeline component
// Upload or Delete posts with caption

// @desc Upload new image
// @route POST /upload {data}

router.post("/upload", upload.single("pet"), async (req, res, next) => {
  if (!req.file) {
    res.send("Select a file");
    console.log("request without a file");
    res.end();
  } else {
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
});

// @desc retrieve all post
// @route POST /showpost
router.post("/showuploads", async (req, res) => {
  const response = [];

  // Query all posts from db where id matchers current user id in local storage.
  await UploadModel.find({}, (error, result) => {
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
    }
  });
});

let like = 0;

router.post("/getlikes", async (req, res) => {
  likeRoutes.fetchLikes(req, res);
});

router.post("/like", async (req, res) => {
  // console.log(req.body);
  likeRoutes.likePhoto(req, res);
});

// @desc create new comment
router.post("/comment", (req, res) => {
  commentRoutes.createComment(req, res);
});

// @desc fetch existing comments
router.post("/fetchComments", (req, res) => {
  commentRoutes.fetchComments(req, res);
});

module.exports = router;

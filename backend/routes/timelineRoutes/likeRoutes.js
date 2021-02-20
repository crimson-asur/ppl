const UploadModel = require("../../models/Post");
const temp = "";

// Utility to like a photo
const likePhoto = async (req, res) => {
  if (!req.body.like == true) {
    try {
      const likesUpdater = await UploadModel.findOneAndUpdate(
        { image: req.body.image, likedBy: { $nin: [req.body.user] } },
        { $inc: { likes: 1 }, $push: { likedBy: req.body.user } },
        { useFindAndModify: false }
      );
      if (likesUpdater === null) {
        res.json({ msg: "You already like it" });
      } else {
        res.json({ msg: "You liked it", likes: likesUpdater.likes + 1 });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const likesDecrement = await UploadModel.findOneAndUpdate(
        { image: req.body.image, likedBy: { $in: [req.body.user] } },
        { $inc: { likes: -1 }, $pull: { likedBy: req.body.user } },
        { useFindAndModify: false }
      );
      if (likesDecrement === null) {
        res.json({ msg: "You disliked it" });
      } else res.json({ msg: "You disliked it", likes: likesDecrement.likes });
    } catch (error) {
      console.log(error);
    }
  }
};

// @desc Get likes of a photo
const fetchLikes = async (req, res) => {
  try {
    const image = await UploadModel.find({
      image: req.body.image,
    });
    // console.log(image.likes);
    res.json({ likes: image[0].likes });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { likePhoto, fetchLikes, temp };

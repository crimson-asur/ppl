const UploadModel = require("../../models/Post");

const createComment = async (req, res) => {
  const comment = { username: req.body.user, comment: req.body.comment };
  console.log(comment);
  try {
    const dbWriteResult = await UploadModel.findOneAndUpdate(
      {
        image: req.body.image,
      },
      {
        $push: {
          comments: { username: req.body.user, comment: req.body.comment },
        },
      },
      { useFindAndModify: false }
    );
    res.json(dbWriteResult);
    // res.end();
  } catch (error) {
    console.log(error);
  }
};

const fetchComments = (req, res) => {
  res.end("Coming soon");
};
module.exports = { createComment, fetchComments };

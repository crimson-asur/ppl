const UploadModel = require("../../models/Post");

const createComment = async (req, res) => {
  const comment = { username: req.body.username, comment: req.body.comment };
  console.log(comment);
  try {
    // Update document by pushing new comment in "comments" array
    const dbWriteResult = await UploadModel.findOneAndUpdate(
      {
        image: req.body.image,
      },
      {
        $push: {
          comments: { username: req.body.username, comment: req.body.comment },
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

// Function to get comments from db
const fetchComments = async (req, res) => {
  try {
    // find in DB by image id
    const dbReadResult = await UploadModel.find({ image: req.body.image });
    res.json({ comments: dbReadResult[0].comments });
    // console.log(dbReadResult);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createComment, fetchComments };

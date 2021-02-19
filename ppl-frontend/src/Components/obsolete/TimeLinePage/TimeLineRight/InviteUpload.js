import React, { useState, useEffect } from "react";
import axios from "axios";
const UploadForm = () => {
  const formData = new FormData();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log("useEffect called in inviteupload");
  }, [image]);
  // onChange event
  const handleChange = (event) => {
    setCaption(event.target.value);
  };

  // Handler for file change
  const handleFile = (event) => {
    setImage(event.target.files[0]);
    console.log(image);
  };
  // Onsubmit event
  const handleSubmit = async (event) => {
    event.preventDefault();

    formData.append("caption", caption);
    formData.append("pet", image);
    let email = localStorage.getItem("email");
    formData.append("email", email);
    axios
      .post("http://localhost:3001/timeline/upload", formData)
      .then((response) => {
        console.log(response);
        alert("upload succeessful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="rght_cate">
      <form
        action=""
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <input type="file" onChange={handleFile} id="pet" required name="pet" />

        <label htmlFor="caption">Caption</label>

        <textarea
          onChange={handleChange}
          name="caption"
          style={{ padding: "4 5 px" }}
          required
        ></textarea>

        <input
          type="submit"
          style={{ margin: "2 3 px" }}
          className="rght_btn"
          placeholder="Upload"
        />
      </form>
    </div>
  );
};

const InviteUpload = () => {
  const [isUpload, setIsUpload] = useState(false);
  const renderForm = () => {
    setIsUpload((prevValue) => !prevValue);
  };
  return (
    <div>
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="images/btn_iconb.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a href="#" onClick={renderForm}>
          Upload Post
        </a>
      </div>
      {isUpload ? <UploadForm /> : ""}
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="images/btn_icona.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a href="#">Invite Friends</a>{" "}
      </div>
    </div>
  );
};

export default InviteUpload;

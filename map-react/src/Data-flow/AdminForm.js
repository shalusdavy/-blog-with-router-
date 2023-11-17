import React, { useState } from "react";
import Preview_blog from "./Preview_blog";
import "./AdminForm.css";

const AdminForm = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleDateString("default", { month: "long" });
    const day = now.getDate();
    const time = now.getTime();

    return now.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  const data = {
    image: "",
    title: "",
    subTitle: "",
    description: "",
    Date: getCurrentDate(),
  };
  const [blogData, setBlogData] = useState(data);
  // const [showdata,setShowData] = useState();
  // console.log(showdata)

  const handleData = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/blogData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="admin-form-layout">
      <div className="admin-form-layout">
        <div className="admin-form-card">
          <div className="admin-form-header">
            <h1>ADMIN FORM</h1>
          </div>
          <div className="form-input">
            <input
              type="text"
              className="imageURL"
              name="image"
              value={blogData.image}
              onChange={handleData}
              placeholder="Enter Image URL"
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              className="blog-title"
              name="title"
              value={blogData.title}
              onChange={handleData}
              placeholder="Enter Title"
            />
          </div>

          <div className="form-input">
            <input
              type="text"
              className="blog-sub-title"
              name="subTitle"
              value={blogData.subTitle}
              onChange={handleData}
              placeholder="Enter subtitle"
            />
          </div>

          <div className="form-input">
            <textarea
              type="text"
              className="description"
              name="description"
              value={blogData.description}
              onChange={handleData}
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className=".upload-btn-div ">
            <button className="upload-btn" onClick={handleSumbit}>
              Create Blog
            </button>
          </div>
        </div>
      </div>
      <div className="preview-form">
        <Preview_blog blogData={blogData} />
      </div>
    </div>
  );
};

export default AdminForm;

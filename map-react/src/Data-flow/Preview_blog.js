import React from 'react';
import "./AdminForm.css";


const Preview_blog = ({blogData}) => {
  return (
    <div className="main-child-card">
    <div className="img-sec">
      <img
        className="main-image"
        alt="NO_IMAGE"
        src={blogData.image || "NO IMAGE"}
      />
    </div>
    <div className="main-card-content">
      <h1>{blogData.title || "Title Not Available"}</h1>
      <div className="sub-title-main-child">
        <p>{blogData.subTitle || "Subtitle Not Available"},</p>
      </div>
      <p className="main-card-para">
        {blogData.description || "Description Not Available"}
      </p>
      <div className="card-ending">
        <button className="read-more-btn">
          <p>
            READ MORE
            <span className="material-symbols-outlined"></span>
          </p>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Preview_blog
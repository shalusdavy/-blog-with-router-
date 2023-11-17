import React from "react";
import "./Posts.css";
import { useState, useEffect } from "react";

const Posts = () => {
  const [data, setData] = useState([]);

  function item() {
    fetch("http://localhost:8000/blogData")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }

  useEffect(() => {
    item();
  }, []);

  const firstFourItems = data.slice(2,data.length-3);
  
  return (
    <>
      <div className="posttitile">
        <h2>Popular Posts</h2>
        {firstFourItems.map((props, index) => (
          <div className="main_posts" key={index}>
            <div className="posts">
              <div className="post_img">
                <img src={props.image} alt="img"></img>
              </div>
              <div className="txt">
                <h4>{props.title} </h4>
                <h5>{props.subTitle}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Posts;

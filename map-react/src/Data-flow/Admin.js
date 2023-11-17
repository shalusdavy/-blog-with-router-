import React, { useState } from "react";
import axios from "axios";

const admin = () => {
  const [blogData, setBlogData] = useState([]);

  console.log(blogData);

  function item() {
    fetch("http://localhost:8000/blogData")
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
  useEffect(() => {
    item();
  }, []);

  return (
    <div>
      <img src={blogData.img}></img>
    </div>
  );
};

export default admin;

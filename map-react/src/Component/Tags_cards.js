import React, { useState, useEffect } from "react";
import "./Tags_cards.css";

const Tags_cards = ({ Tags, index,tagdata }) => {
  const [data, setData] = useState([]);

  function fetchData() {
    fetch("http://localhost:8000/Tags")
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
    fetchData();
  }, []); 

  return (
    <div className="lasttag" key={index}>
      <h3> Tags</h3>
      <div className="tag_headerbg">
        {Tags.map((props, index) => (
          <label onClick={tagdata}> {props.label}</label>
        ))}
      </div>
    </div>
  );
};

export default Tags_cards;

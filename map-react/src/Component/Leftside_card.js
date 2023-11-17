// import { useState } from "react";
import React from "react";
import "./Leftside_card.css";
import { useState, useEffect } from "react";




const Leftside_card = ({ states, totalCount, currentPage }) => {
  const [collapse, setcollapse] = useState(false);
  const [data, setData] = useState([]);
  const itemsPerPage = 2;

  function item() {
    // console.log(data)
    fetch("http://localhost:8000/blogData")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
  useEffect(() => {
    try {
      if (states && states.length > 0) {
        setData(states);
      } else {
        item();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [states]);
    const getCurrentDate = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
     
    };
    return now.toLocaleDateString(undefined, options);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  return (
    <>
      {data.slice(startIndex, endIndex).map((props, index) => (
        <div className="card" key={startIndex + index}>
          <img src={props.image} alt="img"></img>

          <div className="card_container">
            <b>{props.subTitle} </b>
            <h5>
              {props.title}{" "}
              <span>
                {props.Date} {getCurrentDate()}
              </span>
            </h5>
            <p className="content">
              {props.para}
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at.
              <span className={`long_text ${collapse ? "expend" : ""}`}>
                Phasellus sed ultricies mi non congue ullam corper. Praesent
                tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
                porta lectus vitae, ultricies congue gravida diam non fringilla.
                Phasellus sed ultricies mi non congue ullam corper. Praesent
                tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
                porta lectus vitae, ultricies congue gravida diam non fringilla.
                Phasellus sed ultricies mi non congue ullam corper. Praesent
                tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
                porta lectus vitae, ultricies congue gravida diam non fringilla.
              </span>
            </p>
            <div className="btn_cmt">
              <button onClick={() => setcollapse((prev) => !prev)}>
                READ MORE »
              </button>
              <span>
                comment <label>{props.comment}</label>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leftside_card;

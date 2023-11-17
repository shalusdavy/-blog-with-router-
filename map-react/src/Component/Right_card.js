import React from "react";
import "./Right_card.css";


const Right_card = ({ cards }) => {
  return (
    <>
      {cards.map((props, index) => (
        <div className="card_right" key={index}>
          <img src={props.img} alt="img"></img>
          <b>{props.head} </b>

          <div className="card_container">
            Just me, myself and I, exploring the universe of uknownment. I have
            a heart of love and a interest of lorem ipsum and mauris neque quam
            blog. I want to share my world with you.
          </div>
        </div>
      ))}
    </>
  );
};

export default Right_card;

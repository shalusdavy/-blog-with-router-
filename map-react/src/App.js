import React from "react";
import "./App.css";
import Leftside_card from "./Component/Leftside_card";
import Right_card from "./Component/Right_card";
import Posts from "./Component/Posts";
import Tags_cards from "./Component/Tags_cards";
import Footer from "./Component/Footer";
import { useState, useEffect } from "react";

function App() {
  const [traveldata, setTraveldata] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  // const [data, setData] = useState([]);

  const tagdata = (page) => {
    fetch(`http://localhost:8000/blogData?page=${page}&itemsPerPage=${2}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setTraveldata(data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    tagdata(currentPage);
  }, [currentPage]);

  const itemsPerPage = 2;
  const maxPage = Math.ceil(traveldata && traveldata.length / itemsPerPage);
  // console.log(maxPage);

  const changePage = (page) => {
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
    }
  };

  const card = [
    {
      img: "https://www.w3schools.com/w3images/avatar_g.jpg",
      head: "My Name",
    },
  ];

  const Post = [
    {
      img: "https://www.w3schools.com/w3images/workshop.jpg",
      head: "Lorem",
      titile: "Sed mattis nunc",
    },
    {
      img: "https://www.w3schools.com/w3images/gondol.jpg",
      head: "Ipsum",
      titile: "Praes tinci sed",
    },
    {
      img: "https://www.w3schools.com/w3images/skies.jpg",
      head: "Dorum",
      titile: "Ultricies congue",
    },
    {
      img: "https://www.w3schools.com/w3images/rock.jpg",
      head: "Mingsum",
      titile: "Lorem ipsum dipsum",
    },
  ];

  const Tag = [
    { label: "Travel" },
    { label: "New York" },
    { label: "London" },
    { label: "IKEA" },
    { label: "NORWAY" },
    { label: "DIY" },
    { label: "Ideas" },
    { label: "Baby" },
    { label: "Family" },
    { label: "News" },
    { label: "Clothing" },
    { label: "Shopping" },
    { label: "Sports" },
    { label: "Games" },
  ];

  return (
    <>
      <div className="App">
        <div className="main_titiles">
          <h1>My Blog</h1>
          <p>Welcome to the blog of unknown</p>
        </div>
        <div className="main_content">
          <div className="left_cards">
            <Leftside_card currentPage={currentPage} />
          </div>
          <div className="right_cards">
            <Right_card cards={card} />
            <Posts Posts={Post} />
            <Tags_cards Tags={Tag} />
          </div>
        </div>
      </div>
      <Footer
        currentPage={currentPage}
        changePage={changePage}
        maxPage={maxPage}
      />
    </>
  );
}

export default App;

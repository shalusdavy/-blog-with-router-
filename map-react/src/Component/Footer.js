import React from "react";
import "./Footer.css";

const Footer = ({ currentPage, changePage, maxPage }) => {
  return (
    <div className="footer">
      <div className="footer_btn">
        <button
          className="pri"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          className="nxt"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;

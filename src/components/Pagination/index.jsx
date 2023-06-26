import React from "react";
import './index.css'

function Pagination({pageNumber, setPageNumber}) {
  const handlePrev = (e) => {
    e.preventDefault();
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (pageNumber < 42) {
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <div className="pagination-container">
      <button className="pagination-button" onClick={handlePrev}>Prev</button>
      <span className="page-number">{pageNumber}</span>
      <button className="pagination-button" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Pagination;

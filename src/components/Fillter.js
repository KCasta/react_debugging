import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
  });

  return (
    <div style={{ marginBottom: "10px" }}>
      <h2>Filter Movies</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) => {
            const newTitle = e.target.value;
            setInputValues({ ...inputValues, title: newTitle });
            onFilterChange(newTitle, inputValues.rating);
          }}
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          value={inputValues.rating}
          onChange={(e) => {
            const newRating = e.target.value;
            setInputValues({ ...inputValues, rating: newRating });
            onFilterChange(inputValues.title, newRating);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;

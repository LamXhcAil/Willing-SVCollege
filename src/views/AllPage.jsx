import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const AllPage = () => {
  const { willingsToDisplay, onConfirm } = useContext(AppContext);

  const [bgColors, setBgColors] = useState(
    new Array(willingsToDisplay.length).fill("")
  );
  const [showDescriptions, setShowDescriptions] = useState(
    new Array(willingsToDisplay.length).fill(false)
  );
  const [selectedWillings, setSelectedWillings] = useState([]);

  const handleClick = (index) => {
    setBgColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === "" ? "lightgreen" : "";
      return newColors;
    });
    setShowDescriptions((prevShow) => {
      const newShow = [...prevShow];
      newShow[index] = !newShow[index];
      return newShow;
    });
    setSelectedWillings((prevSelected) => {
      const newSelected = [...prevSelected];
      if (newSelected.includes(index)) {
        newSelected.splice(newSelected.indexOf(index), 1);
      } else {
        newSelected.push(index);
      }
      return newSelected;
    });
  };

  return (
    <>
      {willingsToDisplay.map((willing, index) => (
        <div
          key={index}
          style={{ backgroundColor: bgColors[index], color: "black" }}
          onClick={() => handleClick(index)}
        >
          {willing.title}
          {showDescriptions[index] && <div>{willing.description}</div>}
        </div>
      ))}
      <button
        onClick={() => {
          onConfirm(selectedWillings.map((index) => willingsToDisplay[index]));
        }}
      >
        אישור
      </button>
    </>
  );
};

export default AllPage;

import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const HomePage = () => {
  const { navigate } = useContext(AppContext);
  return (
    <div>
      <h1 style={{ color: "black" }}>WILLING</h1>

      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          navigate("/find");
        }}
      >
        מצא התנדבות
      </button>

      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          navigate("/add");
        }}
      >
        הוספת התנדבות
      </button>
    </div>
  );
};

export default HomePage;

import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const AddPage = () => {
  const { navigate, setWillings } = useContext(AppContext);
  const [newWilling, setNewWilling] = useState({
    title: "",
    location: "",
    description: "",
  });

  const onCreate = (location) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(location);
  };
  return (
    <>
      <input
        value={newWilling.title}
        onInput={(e) => {
          setNewWilling((prevTitle) => ({
            ...prevTitle,
            title: e.target.value,
          }));
        }}
        placeholder="כותרת"
        maxLength={20}
        type="text"
      />

      <input
        value={newWilling.location}
        onInput={(e) => {
          setNewWilling((prevLoc) => ({
            ...prevLoc,
            location: e.target.value,
          }));
        }}
        placeholder="מיקום"
        type="text"
      />

      <input
        value={newWilling.description}
        onInput={(e) => {
          setNewWilling((prevDes) => ({
            ...prevDes,
            description: e.target.value,
          }));
        }}
        placeholder="תיאור"
        maxLength={200}
        type="text"
      />
      <button
        onClick={() => {
          if (onCreate(newWilling.location)) {
            setWillings((prevWill) => [...prevWill, newWilling]);
            navigate("/");
          } else {
            alert("Location should contain only English letters");
          }
        }}
      >
        יצירת התדנבות חדשה
      </button>
    </>
  );
};

export default AddPage;

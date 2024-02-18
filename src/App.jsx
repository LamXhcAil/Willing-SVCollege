import "./App.css";
import AppContext from "./appContext";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./views/HomePage";
import AddPage from "./views/AddPage";
import FindPage from "./views/FindPage";
import AllPage from "./views/AllPage";

function App() {
  const [willings, setWillings] = useState([]);

  const [willingsToDisplay, setWillingsToDisplay] = useState([]);

  const navigate = useNavigate();

  const onSearch = (willingToFind) => {
    if (willingToFind.name.length < 2) {
      alert("Name is too short! must be longer than 2 chars!");
      return;
    }
    const existingWills = willings.filter(
      (willing) => willing.location === willingToFind.location
    );
    setWillingsToDisplay(existingWills);
    navigate("/all");
  };

  const onConfirm = (willingToRemove) => {
    let found = false;
    const newWillings = willings.filter((willing) => {
      if (!found && willing.description === willingToRemove[0].description) {
        found = true;
        return false;
      }
      return true;
    });
    setWillings(newWillings);
    navigate("/");
  };

  const contextValue = {
    navigate,
    setWillings,
    onSearch,
    willings,
    willingsToDisplay,
    onConfirm,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/find" element={<FindPage />} />
          <Route path="/all" element={<AllPage />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;

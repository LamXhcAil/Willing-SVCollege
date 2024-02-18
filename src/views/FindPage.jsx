import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const FindPage = () => {
  const { onSearch, willings } = useContext(AppContext);
  const [willingToFind, setWillingToFind] = useState({
    name: "",
    location: "",
  });
  return (
    <>
      <input
        value={willingToFind.name}
        onInput={(e) => {
          setWillingToFind((prevName) => ({
            ...prevName,
            name: e.target.value,
          }));
        }}
        placeholder="שם המתנדב"
        minLength={2}
        type="text"
      />
      <select
        onChange={(e) => {
          setWillingToFind((prevWilling) => ({
            ...prevWilling,
            location: e.target.value,
          }));
        }}
      >
        <option value="">בחר מיקום</option>
        {willings
          .map((willing) => willing.location)
          .filter((location, index, self) => self.indexOf(location) === index)
          .map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
      </select>

      <button
        onClick={() => {
          onSearch(willingToFind);
        }}
      >
        חפש
      </button>
    </>
  );
};

export default FindPage;

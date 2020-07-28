import React, { useState } from "react";
import "./SearchUsers.scss";

export default function Users(props) {
  const {placeholder} = props; 
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <label>
        <input
          type="text"
          className="search-users-input"
          onChange={({ target: { value } }) => setSearchValue(value)}
          value={searchValue}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

import React, { useState } from "react";
import "./SearchUsers.scss";

export default function Users(props) {
  const { placeholder, filterValue, setFilterValue } = props;
  return (
    <>
      <label>
        <input
          type="text"
          className="search-users-input"
          onChange={({ target: { value } }) => setFilterValue(value)}
          value={filterValue}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

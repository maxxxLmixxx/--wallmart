import React from "react";
import "./SearchUsers.scss";

export default function Users(props) {
  const { placeholder, filterValue, setFilterValue } = props;
  return (
    <>
      <label>
        <input
          type="search"
          className="search-users-input"
          onChange={({ target: { value } }) => setFilterValue(value)}
          value={filterValue}
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

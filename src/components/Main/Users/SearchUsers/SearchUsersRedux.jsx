import React from "react";

import { connect } from "react-redux";
import { setFilterValue } from "store/users/actions";

import SearchUsers from "./SearchUsers";

function UsersRedux(props) {
  const { filterValue, setFilterValue, ...rest } = props;
  return (
    <SearchUsers
      filterValue={filterValue}
      setFilterValue={setFilterValue}
      {...rest}
    />
  );
}

const mapStateToProps = (state) => {
  const { filterValue } = state;
  return { filterValue };
};

const mapDispatchToProps = {
  setFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux);

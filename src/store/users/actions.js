// export const SET_USER_ACTIVE = "SET_USER_ACTIVE";
export const SET_FILTER_VALUE = "SET_FILTER_VALUE";

// export const setUserActive = (userId, value) => ({
//   type: SET_USER_ACTIVE,
//   payload: {userId, value}
// });

export const setFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: value,
});

// const USERS_URL = `http://ec2-3-133-112-23.us-east-2.compute.amazonaws.com/users/`;
const USERS_URL = `https://jsonplaceholder.typicode.com/posts`;

export const SET_USER_ACTIVE = "SET_USER_ACTIVE";
export const SET_USER_INACTIVE = "SET_USER_INACTIVE";
export const SET_FILTER_VALUE = "SET_FILTER_VALUE";
export const CLEAR_ACTIVE_USERS = "CLEAR_ACTIVE_USERS";
export const SORT_INACTIVE_USERS_AZ = "SORT_INACTIVE_USERS_AZ";
export const BAN_ACTIVE_USERS = "BAN_ACTIVE_USERS";
export const FILTER_BY_ROOM = "FILTER_BY_ROOM";
export const CHANGE_ACTIVE_ROOM = "CHANGE_ACTIVE_ROOM";
export const FETCH_USERS = "FETCH_USERS";

export const setUserActive = (userId) => ({
  type: SET_USER_ACTIVE,
  payload: { userId },
});

export const setUserInactive = (userId) => ({
  type: SET_USER_INACTIVE,
  payload: { userId },
});

export const setFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: { value },
});

export const clearActiveUsers = () => ({
  type: CLEAR_ACTIVE_USERS,
});

export const sortInactiveUsersAz = () => ({
  type: SORT_INACTIVE_USERS_AZ,
});

export const banActiveUsers = () => ({
  type: BAN_ACTIVE_USERS,
});

export const filterByRoom = (roomId) => ({
  type: FILTER_BY_ROOM,
  payload: roomId,
});

export const changeActiveRoom = (roomId) => ({
  type: CHANGE_ACTIVE_ROOM,
  payload: roomId,
});
// -------------------------------------------
const fetchUsers = (users) => ({
  type: FETCH_USERS,
  payload: users 
})

export const fetchUsersThunk = () => async (dispatch) => {
  const response = await fetch(USERS_URL);
  const users = await response.json();
  dispatch(fetchUsers(users));
}

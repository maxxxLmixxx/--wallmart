import { SET_USER_ACTIVE } from "./actions";

const defaultState = [
  { name: "Mike1", id: "11", icon: "", active: false },
  { name: "Mike2", id: "12", icon: "", active: false },
  { name: "Mike3", id: "13", icon: "", active: false },
  { name: "Mike4", id: "14", icon: "", active: false },
  { name: "Mike5", id: "15", icon: "", active: false },
  { name: "Mike6", id: "16", icon: "", active: false },
  { name: "Mike7", id: "17", icon: "", active: false },
  { name: "Mike8", id: "18", icon: "", active: false },
  { name: "Mike9", id: "19", icon: "", active: false },
  { name: "Mike10", id: "20", icon: "", active: false },
  { name: "Mike11", id: "21", icon: "", active: false },
  { name: "Mike12", id: "22", icon: "", active: false },
  { name: "Mike13", id: "23", icon: "", active: false },
  { name: "Mike14", id: "24", icon: "", active: false },
  { name: "Mike15", id: "25", icon: "", active: false },
  { name: "Mike16", id: "26", icon: "", active: false },
  { name: "Mike17", id: "27", icon: "", active: false },
  { name: "Mike18", id: "28", icon: "", active: false },
  { name: "Mike19", id: "29", icon: "", active: false },
  { name: "Mike20", id: "30", icon: "", active: false },
  { name: "Mike21", id: "31", icon: "", active: false },
  { name: "Mike22", id: "32", icon: "", active: false },
  { name: "Mike23", id: "33", icon: "", active: false },
  { name: "Mike24", id: "34", icon: "", active: false },
  { name: "Mike25", id: "35", icon: "", active: false },
  { name: "Mike26", id: "36", icon: "", active: false },
  { name: "Mike27", id: "37", icon: "", active: false },
  { name: "Mike28", id: "38", icon: "", active: false },
  { name: "Mike29", id: "39", icon: "", active: false },
  { name: "Mike30", id: "40", icon: "", active: false },
  { name: "Mike31", id: "41", icon: "", active: false },
  { name: "Mike32", id: "42", icon: "", active: false },
  { name: "Mike33", id: "43", icon: "", active: false },
];

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_ACTIVE:
      const { userId, value } = action.payload;
      return state.map((el) =>
        el.id === userId ? { ...el, active: value } : el
      );
    default:
      return [...state];
  }
};

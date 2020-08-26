export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("error saving local storage", err);
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("error saving local storage", err);
  }
};

export const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) return;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("error saving local storage", err);
  }
};

export const saveStateToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("error saving local storage", err);
  }
};

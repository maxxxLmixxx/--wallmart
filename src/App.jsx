import React from "react";
import styled from "styled-components";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.scss";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "store/reducers";

import ReduxThunk from 'redux-thunk';

import {
  // loadStateFromSessionStorage,
  saveStateToSessionStorage,
} from "utilities/localStorage.js";
// const persistedState = loadStateFromSessionStorage();

const store = createStore(rootReducer, compose(applyMiddleware(ReduxThunk)));
store.subscribe(() => {
  sessionStorage["redux-store"] = JSON.stringify(store.getState());
});
store.subscribe(() => {
  saveStateToSessionStorage(store.getState());
});

const Wrapper = (props) => {
  const { children } = props;
  const WrapperContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
  `;

  return <WrapperContainer>{children}</WrapperContainer>;
};

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Wrapper>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
      </DndProvider>
    </Provider>
  );
};

export default App;

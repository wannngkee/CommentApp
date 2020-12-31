import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CommentApp from "./containers/CommentApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import commentsReducer from "./reducers/comments";
import reportWebVitals from "./reportWebVitals";

const store = createStore(commentsReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CommentApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      {/* Browser router  */}
      <BrowserRouter>
        {/* Provider store to all components */}
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// rerender store redux
rerenderEntireTree(store);
// Observ pattern // subscribe function that oversee if components changed
// if yes rerenders component
store.subscribe(() => {
  rerenderEntireTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

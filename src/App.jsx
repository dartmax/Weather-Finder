import React from "react";
import "./styles.css";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import Store from "./redux/Store";
const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
};

export default App;

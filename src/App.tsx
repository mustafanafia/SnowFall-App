import React from "react";
import Snowfall from "react-snowfall";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Snowfall
        color="#fff"
        snowflakeCount={200}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
    </div>
  );
}

export default App;

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
      {/* Horizontal Menu */}
      <div className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>
  );
}

export default App;

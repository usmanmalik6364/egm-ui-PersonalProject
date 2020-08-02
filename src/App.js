import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/Sidebar";
import Body from "./Components/Body/Body";
function App() {
  return (
    <div>
      <Header className="App_Header" />
      <div className="App_Body">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Body from './components/MainContainer/mainContainer'
import AppBar from "./components/AppBar/appBar";
import SidePanel from "./components/SidePanel/sidePanel";

function App() {
  return (
      <div>
          <AppBar />
          <div>
              <Body />
              <SidePanel />
          </div>

      </div>
  );
}

export default App;

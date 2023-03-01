import React from "react";
import Body from './components/MainContainer/MainContainer'
import SidePanel from "./components/SidePanel/SidePanel";
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.body}>
              <SidePanel />
              <Body />
          </div>
    );
}

export default App;

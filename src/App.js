import React, {useEffect, useState} from "react";
import MainContainer from './components/MainContainer/MainContainer'
import SidePanel from "./components/SidePanel/SidePanel";
import styles from './App.module.css'

function App() {

    return (
        <div className={styles.body}>
              <SidePanel />
              <MainContainer />
          </div>
    );
}

export default App;

import React, {useEffect, useState} from "react";
import MainContainer from './components/MainContainer/MainContainer'
import SidePanel from "./components/SidePanel/SidePanel";
import styles from './App.module.css'
import TopBar from "./components/TopBar/TopBar";

function App() {

    return (
        <div className={styles.body}>
            <TopBar />
            <div className={styles.content}>
                <SidePanel />
                <MainContainer />
            </div>
        </div>
    );
}

export default App;

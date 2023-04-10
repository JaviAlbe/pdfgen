import React from 'react';
import styles from './TopBarStyles.module.css'
import logo from '../../icons/shuttle.png'

function TopBar() {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.logo} src={logo}/>
        </div>
    );
}

export default TopBar;
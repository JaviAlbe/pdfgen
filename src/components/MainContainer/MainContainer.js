import React from 'react';
import styles from './MainContainerStyles.module.css'

const mainContainer = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This is the main container</h1>
        </div>
    );
}

export default mainContainer;
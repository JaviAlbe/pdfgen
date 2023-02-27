import React from 'react';
import styles from './appBarStyles.module.css'

const appBar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello, world!</h1>
            <p className={styles.text}>This is a React component declared as an arrow function.</p>
        </div>
    );
}

export default appBar;
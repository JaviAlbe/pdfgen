import React from 'react';
import styles from './SidePanelStyles.module.css'
import TrainingCard from "../TrainingCard/TrainingCard";

const SidePanel = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This is a Side Panel</h1>
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
        </div>
    );
}

export default SidePanel;
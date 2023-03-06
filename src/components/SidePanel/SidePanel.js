import React from 'react';
import styles from './SidePanelStyles.module.css'
import TrainingCard from "../TrainingCard/TrainingCard";

const SidePanel = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This is a Side Panel</h1>
            <TrainingCard title={'Traning one'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning one'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning one'} description={'This is a super training with push ups'}/>
        </div>
    );
}

export default SidePanel;
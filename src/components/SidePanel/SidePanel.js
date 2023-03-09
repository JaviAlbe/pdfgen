import React from 'react';
import styles from './SidePanelStyles.module.css'
import TrainingCard from "../TrainingCard/TrainingCard";

const SidePanel = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This is a Side Panel</h1>
            <TrainingCard title={'Traning one'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning two'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning three'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning four'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning five'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning six'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning seven'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning eight'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning nine'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning ten'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning eleven'} description={'This is a super training with push ups'}/>
            <TrainingCard title={'Traning twelve'} description={'This is a super training with push ups'}/>
        </div>
    );
}

export default SidePanel;
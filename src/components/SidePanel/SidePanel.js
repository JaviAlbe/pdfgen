import React from 'react';
import styles from './SidePanelStyles.module.css'
import TrainingCard from "../TrainingCard/TrainingCard";

const SidePanel = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This is a Side Panel</h1>
                <TrainingCard
                id={1}
                title={'Traning one'}
                description={'This is a super training with push ups'}
                link={'www.google.com'} active={false}/>
            <TrainingCard
                id={2}
                title={'Traning two'}
                description={'This is a super training with push ups'}
                link={'www.google.com'} active={false}/>
            <TrainingCard
                id={3}
                title={'Traning three'}
                description={'This is a super training with push ups'}
                link={'www.google.com'} active={false}/>
            <TrainingCard
                id={4}
                title={'Traning four'}
                description={'This is a super training with push ups'}
                link={'www.google.com'} active={false}/>
        </div>
    );
}

export default SidePanel;
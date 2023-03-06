import React from 'react';
import styles from './TrainingCardStyles.module.css'

const TrainingCard = ({title, description}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default TrainingCard;
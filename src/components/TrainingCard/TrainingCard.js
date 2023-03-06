import React from 'react';
import styles from './TrainingCardStyles.module.css'

const TrainingCard = ({ }) => {
    return (
        <div className={styles.card}>
            <h3>This is a card</h3>
            <p>And this is some card description that if you repeat x20 times you'll become stronger</p>
        </div>
    );
};

export default TrainingCard;
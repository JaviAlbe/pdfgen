import React from 'react';
import styles from './TrainingCardStyles.module.css'
import {useSelector, useDispatch} from "react-redux";
import {addCard, removeCard} from '../../redux/actions/actions'


const TrainingCard = ({title, description}) => {

    const cardToAdd = {title: title, description: description}
    const dispatch = useDispatch()

    return (
        <div className={styles.card} onClick={() => dispatch(addCard(cardToAdd))}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default TrainingCard;
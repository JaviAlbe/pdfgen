import React from 'react';
import styles from './TrainingCardStyles.module.css'
import {useDispatch} from "react-redux";
import {addCard, removeCard} from '../../redux/actions/actions'


const TrainingCard = ({id, title, description, link, active}) => {

    const clickedCard = {id: id, title: title, description: description, active: active}
    const dispatch = useDispatch()


    return (
        <div className={styles.card}>
            <div onClick={() => dispatch(addCard(clickedCard))}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Watch in youtube</a>
            </div>
            <button onClick={() => dispatch(removeCard(clickedCard))}>Remove Card</button>
        </div>
    );
};

export default TrainingCard;
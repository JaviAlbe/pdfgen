import React from 'react';
import styles from './TrainingCardStyles.module.css'
import {useDispatch} from "react-redux";
import {clickCard} from '../../redux/actions/actions'


const TrainingCard = ({id, title, description, link, active}) => {

    const clickedCard = {id: id, title: title, description: description, active: active}
    const dispatch = useDispatch()

    return (
        <div>
            <div className={styles.card}>
                <div onClick={() => dispatch(clickCard(clickedCard))}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={link}>Watch in youtube</a>
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
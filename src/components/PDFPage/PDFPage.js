import React from 'react';
import styles from './PDFPage.module.css'
import {useSelector, useDispatch} from "react-redux";
import TrainingCard from "../TrainingCard/TrainingCard";
import {getCards} from "../../redux/actions/actions";


const PDFPage = () => {

    const dispatch = useDispatch()

    const getAllCards = () => {
        return dispatch(getCards)
    }


    const renderCards = () => {
        if(getAllCards.length === 0){
            return <p>The list of cards is empty</p>
        }else{
            return (
                <div>
                    {getAllCards.map((card, index) => (
                        <TrainingCard key={index} title={card.title} description={card.description} />
                    ))}
                </div>
            );
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>This is a page</p>
            {renderCards()}
        </div>
    );
}

export default PDFPage;
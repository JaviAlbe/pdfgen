import React from 'react';
import styles from './PDFPage.module.css'
import {useSelector} from "react-redux";
import TrainingCard from "../TrainingCard/TrainingCard";

const PDFPage = () => {

    const getCards = useSelector(state => state.cards)


    const renderCards = () => {
        if(getCards.length === 0){
            return <p>The list of cards is empty</p>
        }else{
            return (
                <div>
                    {getCards.map((card, index) => (
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
import React from 'react';
import styles from './PDFPage.module.css'
import { useSelector, useDispatch} from "react-redux";
import TrainingCard from "../TrainingCard/TrainingCard";


const PDFPage = () => {

    const cards = useSelector(state => state.cards.listOfCards)

    const renderCards = () => {
        if(cards.length === 0){
            return <p>The list of cards is empty</p>
        }else{
            return (
                <div>
                    {cards.map((card, index) => (
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
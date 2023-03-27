import React from 'react';
import styles from './PDFPage.module.css'
import { useSelector } from "react-redux";
import TrainingCard from "../TrainingCard/TrainingCard";


const PDFPage = () => {

    const pdfCards = useSelector(state => state.cards.pdfCards)

    const renderCards = () => {
        if(pdfCards.length === 0){
            return <p>The list of cards is empty</p>
        }else{
            return (
                <div>
                    {pdfCards.map((card, index) => (
                        <TrainingCard
                            key={index}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                            active={card.active} />
                    ))}
                </div>
            );
        }
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>This is a page</p>
            {renderCards()}
            <button onClick={() => console.log('download pdf clicked')}>Download PDF</button>
        </div>
    );
}

export default PDFPage;
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
                        <TrainingCard
                            key={index}
                            id={card.id}
                            title={card.title}
                            description={card.description}
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
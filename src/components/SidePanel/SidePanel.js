import React from 'react';
import styles from './SidePanelStyles.module.css'
import TrainingCard from "../TrainingCard/TrainingCard";
import { useSelector } from "react-redux";

const SidePanel = () => {

    const dataBaseCards = useSelector(state => state.cards.dataBaseCards)

    const renderCards = () => {
        if(dataBaseCards.length === 0){
            return <p>The list of cards is empty</p>
        }else{
            return (
                <div>
                    {dataBaseCards.map((card, index) => (
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
            <h1 className={styles.title}>This is a Side Panel</h1>
            {renderCards()}
        </div>
    );
}

export default SidePanel;
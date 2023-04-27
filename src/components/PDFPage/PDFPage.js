import React, {useState} from 'react';
import styles from './PDFPage.module.css'
import { useSelector } from "react-redux";
import TrainingCard from "../TrainingCard/TrainingCard";
import {Document, Page, PDFDownloadLink, View} from "@react-pdf/renderer";
import Card from './card'


const PDFPage = () => {

    const PDFComponent = () => {
        const [numPages, setNumPages] = useState(null);

        function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
        }

        return (
            <div>
                <PDFDownloadLink
                    document={
                        <Document>
                            <Page size="A4" style={styles.page}>
                                <View style={styles.section}>
                                    <Card />
                                </View>
                            </Page>
                        </Document>
                    }
                    fileName="my-document.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>
            </div>
        );
    }

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
            <PDFComponent />
        </div>
    );
}

export default PDFPage;
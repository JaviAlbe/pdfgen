import React from 'react';
import styles from './MainContainerStyles.module.css'
import PDFPage from "../PDFPage/PDFPage";
import { PDFDownloadLink, Page, Document } from '@react-pdf/renderer';


const mainContainer = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>This is the main container</h1>
            <PDFPage />
        </div>
    );
}

export default mainContainer;
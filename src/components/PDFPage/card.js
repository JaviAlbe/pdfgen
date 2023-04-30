import { Text, StyleSheet, View } from '@react-pdf/renderer';
import React from "react";


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        padding: '10px',
        marginBottom: '10px',
        // boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px'
    },
    title: {
        color:'#a40e52',
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    description: {
        fontSize: '14px'
    },
    link: {
        fontSize: '14px',
        color:'#107fcb'
    }
});

const card = ({ title, description, link }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.link}>Watch in Youtube</Text>
        </View>
    )
}

export default card
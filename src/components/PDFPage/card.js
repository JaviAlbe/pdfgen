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
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    body: {
        fontSize: '14px'
    }
});

const card = () => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>This is a title</Text>
            <Text style={styles.body}>Wanda wanda olowokanda wanda wanita wanda</Text>
        </View>
    )
}

export default card
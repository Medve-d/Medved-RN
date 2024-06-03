import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Bonjour et bienvenue, sur le site Sauver des Vies !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

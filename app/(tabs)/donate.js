import { View, StyleSheet, Text } from "react-native";

export default function DonateScreen() {
    return (
        <View style={styles.container}>
        <Text>Faites un don !</Text>
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
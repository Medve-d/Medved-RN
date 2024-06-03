import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{title: "Oops!"}} />
        <View>
            <Text>Oops... Not found !</Text>
        </View>

        </>
    );
}
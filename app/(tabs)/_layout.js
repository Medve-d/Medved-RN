import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Home"}}/>
            <Tabs.Screen name="legalMention" options={{title: "Mention légales"}}/>
            <Tabs.Screen name="donate" options={{title: "Donate"}}/>
        </Tabs>
    )
}
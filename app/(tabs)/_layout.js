import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Accueil"}}/>
            <Tabs.Screen name="legalMention" options={{title: "Mention légales"}}/>
            <Tabs.Screen name="donate" options={{title: "Faites un don !"}}/>
            <Tabs.Screen name="information" options={{title: "Page d'informations"}}/>
        </Tabs>
    )
}
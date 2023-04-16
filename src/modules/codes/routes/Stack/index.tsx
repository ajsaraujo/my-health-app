import React from "react";
import Home from "../../screens/Home"
import Consulta from "../../screens/Consulta";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";


const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function () {
    return (
        <Navigator initialRouteName="Home" screenOptions={{
            headerShown:false,
            }}>
            <Screen name = "Home" component= {Home} />
            <Screen name = "Consulta" component= {Consulta} />
        </Navigator>
    )
}
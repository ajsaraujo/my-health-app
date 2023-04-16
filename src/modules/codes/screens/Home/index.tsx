import React from "react";
import {Text, View, Button, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";

const Home = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style = {{backgroundColor: '#258F45',flex:1, justifyContent: "center", alignItems: 'center' }}>
            <Text>MyHealth</Text>
            <Text>Módulo Consulta de Códigos</Text>
            <TextInput
            style={{marginTop: 12, backgroundColor: 'grey', padding: 10, fontSize: 30 }}
            placeholder="Digite o código"
            placeholderTextColor="#272626"
        />
            <TouchableOpacity
            style = {{padding: 20, backgroundColor: "green" }}
            onPress ={() => navigation.navigate("Consulta", {
                name: "Consulta"
            })}>
                <Text>Buscar</Text>
                </TouchableOpacity>

            
        </View>
    )
}

export default Home;
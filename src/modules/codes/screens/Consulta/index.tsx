import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { propsNavigationStack } from "../../routes/Stack/Models";


const Consulta = () => {
    const navigation = useNavigation()

    return (
        <View style={{ alignItems: 'center' }}>
            <Text>MyHealth</Text>
            <Text>CID-10</Text>
            <TouchableOpacity style={{ padding: 8, backgroundColor: "green" }}
                onPress={() => { }}
            >
                <Text>Adicionar aos Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center', width: 180, marginTop: 12, padding: 8, backgroundColor: "green" }}
                onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Consulta;
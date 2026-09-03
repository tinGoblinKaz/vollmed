import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LabeledInput({ label  }) {
    return (
        <View style={styles.wrapper}>
            <Text>
                { label }
            </Text>
            <TextInput placeholderTextColor="#B5B5B5" />
           
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%", // Faz o componente ocupar toda a largura disponível
        marginBottom: 14, // Define o espaço abaixo do campo
    }
})
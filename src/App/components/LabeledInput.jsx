import { View, Text, TextInput, StyleSheet } from "react-native";

const INPUT_BG = "#F5F5F5";
const INPUT_BORDER = "#E8E8E8";
const LABEL_COLOR = "#36454F";
export default function LabeledInput({ label  }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>
                { label }
            </Text>
            <TextInput 
                sytles ={styles.input}
                placeholderTextColor="#B5B5B5" />
           
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%", // Faz o componente ocupar toda a largura disponível
        marginBottom: 14, // Define o espaço abaixo do campo
    },
    label: {
        marginBottom: 6,
        color: LABEL_COLOR,
        fontSize: 14,
        fontWeight: 600,

    },
    input: {
        backgroundColor: INPUT_BG,
        borderRadius: 8,
        borderColor: INPUT_BG,
        borderWidth: 1, //Define o comprimento da borda

        shadowColor: "#000", //Define a cor da borda
        shadowOffset:{width: 1, height: 2}, //Define a posição da sombra
        shadowOpacity: 0.88, //Define a transparência
        shadowRadius: 6,

        fontSize: 14,
        color: "#222",
        
        paddingHorizontal: 14,
        paddingVertical: 12,

    },
})
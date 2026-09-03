// Componente de tela
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button"
import LabeledInput from "../components/LabeledInput";


export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LabeledInput label="Nome:"/>
      <Button textButton="Cadastrar"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{},

})

// Componente de tela
import { Text, StyleSheet } from "react-native";
import Button from "../components/Button"
import LabeledInput from "../components/LabeledInput";
import ScreenContainer from "../components/ScreenContainer";
import Logo from "../components/Logo";
//import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <ScreenContainer>
      <Logo/>
      
        <Text style={styles.title}>Faça login na sua conta</Text>
        <LabeledInput 
          label="Email:"
          placeholder= "Insira seu endereço de email:"
          />
        <LabeledInput 
          label="Senha:"
          placeholder="Insira sua Senha"
          />
        <Button textButton="Entrar" onPress={()=>navigation.navigate("registerscreen1")}/>
      
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: 62,  
    },
    title:{
      fontSize: 20,
      fontWeight:700,
      textAlign: "center",
      color: "#6B6E71",
      marginBottom: 26, 

    },

})

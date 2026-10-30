import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button"
import LabeledInput from "../components/LabeledInput";
import Logo from "../components/Logo";
import { useState } from "react";

export default function RegisterScreen1() {
  const [nome, setnome] = useState("");
    return(
      <ScreenContainer>
        <Logo/>
              <Text style={styles.title}>Insira alguns dados básicos</Text>
              <LabeledInput   label="Nome:"  placeholder= "Digite seu nome completo"/>
              <LabeledInput   label="Email:"  placeholder= "Insira seu endereço de email:"/>
              <LabeledInput   label="Senha:"  placeholder="Insira sua senha"/>
              <LabeledInput   label="Repita a senha:"placeholder="Insira sua senha"/>
              <Button textButton="Avançar"/>
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
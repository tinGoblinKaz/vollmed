import { NavigationContainer } from '@react-navigation/native';
// NavigationContainer: contexto global de navegação. Mantém o histórico de telas (a "pilha").
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// createNativeStackNavigator: navegador de pilha usando componentes nativos do iOS/Android.

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen1 from '../screens/RegisterScreen1';
import RegisterScreen2 from '../screens/RegisterScreen2';
import RegisterScreen3 from '../screens/RegisterScreen3';

const Stack = createNativeStackNavigator(); // Cria a instância do navegador

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"        // Tela exibida ao abrir o app
        screenOptions={{
          headerShown: false,            // Oculta o cabeçalho padrão em TODAS as telas
          animation: 'slide_from_right', // Animação: desliza da direita para a esquerda
        }}
      >
        <Stack.Screen name="login"          component={LoginScreen} />
        <Stack.Screen name="registerscreen1" component={RegisterScreen1} />
        <Stack.Screen name="registerscreen2" component={RegisterScreen2} />
        <Stack.Screen name="registerscreen3" component={RegisterScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
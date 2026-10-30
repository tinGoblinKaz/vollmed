# PRINCIPAIS COMANDOS DO EXPO/RN
1. `npx create-expo-app meu-primeiro-app --template blank` -> Criação do projeto contendo uma base inicial.
2. `npx expo start` -> Inicia o servidor de desenvolvimento.
3. `npm run reset-project` -> Limpa os arquivos de apresentação.
4. `npx expo install react-dom react-native-web` -> Simula o app no navegador.
5. `npx expo install expo router` -> .

src
 -- App
 -- assets
 -- App.js

 🗂️app
- 📂components
  -- 📕LabeledInput.jsx
  -- 📕Button.jsx
  -- 📕ScreenContainer.jsx
  -- 📕Logo.jsx
- 📂screens
  -- 📗LoginScreen.jsx
  -- 📘RegisterScreen1.jsx
  -- 📘RegisterScreen2.jsx
  -- 📘RegisterScreen3.jsx
- 📂routes
  -- 📙index.jsx
  -- 📙StackRoutes.jsx
- 📂theme
  -- 📓color.js
 📂utils
  -- 📒masks.js
 📂services
 📂assets
  -- 📂images
    -- 🩻logo.png

 # Tipos de primitivos por componemte
 --  📕ScreenContainer.jsx
 <SafeAreaView></SafeAreaView> -> é um componente que garante que o conteúdo da tela não fique escondido atrás de elementos do sistema.
 <KeyboardAvoidingView></KeyboardAvoidingView> -> é um componente que ajusta automaticamente o layout do teclado virtual na tela, quando ele é aberto.
 <ScrollView></ScrollView> -> é um componente que permite o conteúdo da tela seja rolável, caso ultrapasse a altura da tela.
  - keyboardShouldPersistTaps ->
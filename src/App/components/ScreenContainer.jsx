import { ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../theme/colors"

export default function ScreenContainer({children, contentStyle}){
    return(
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView style={styles.flex}>
                <ScrollView
                  contentContainerStyle={[styles.content, contentStyle]}  
                  keyboardShouldPersistTaps="handled"
                >
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safe: {flex: 1, backgroundColor: colors.background},
    flex:{flex: 1, },
    content:{flexGrow: 1, padding:24, paddingTop: 32 },
});
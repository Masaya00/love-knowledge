import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";


const Edit = (): JSX.Element => {

    const handlePress = (): void => {
        router.back()
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline value={"買い物\nリスト"} style={styles.input}></TextInput>
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name="check" size={40} color="#ffffff"></Icon>
            </CircleButton>

        </KeyboardAvoidingView>
    )
}

export default Edit


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    }
})
import { View, TextInput, StyleSheet, Alert } from "react-native";
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";
import { auth, db } from "../../config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";



const Create = (): JSX.Element => {

    const [ bodyText, setBodyText] = useState("")

    const handlePress = async (): Promise<any> => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)

        await addDoc(ref, {
            bodyText: bodyText,
            updatedAt: Timestamp.fromDate(new Date()),
        })
        .catch((error) => {
            Alert.alert('登録に失敗しました')
        })
        router.back()
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                multiline 
                value={bodyText} 
                style={styles.input}
                onChangeText={(text) => { setBodyText(text) }}
                autoFocus
                ></TextInput>
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name="check" size={40} color="#ffffff"></Icon>
            </CircleButton>

        </KeyboardAvoidingView>
    )
}

export default Create


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
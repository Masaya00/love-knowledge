import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config'

const Login = (): JSX.Element => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handlePress = (email: string, password: string): void => {
        // login処理を行う
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            router.replace('/memo/list')
        })
        .catch((error) => {
            const {code, message} = error
            Alert.alert(message)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChange={(e) => { setEmail(e.nativeEvent.text)} }
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                ></TextInput>
                <TextInput 
                    style={styles.textInput} 
                    value={password}
                    onChange={(e) => { setPassword(e.nativeEvent.text)} }
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                ></TextInput>
                <Button onPress={() => {handlePress(email, password)}}>Submit</Button>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not Registered?</Text>
                    <Link href='/auth/signup' asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign Up Here</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    textInput: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#dddddd',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3'
    }
})

export default Login
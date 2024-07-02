import { View, Text, TextInput, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Signup = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Signup</Text>
                <TextInput style={styles.textInput} value="Email Address"></TextInput>
                <TextInput style={styles.textInput} value="Password"></TextInput>
                <Button>Submit</Button>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Text style={styles.footerLink}>Login</Text>
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
        color: 'gray',
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

export default Signup
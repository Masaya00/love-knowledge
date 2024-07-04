import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";


interface Props {
    children: string
    onPress?: () => void
}

const Button = (props: Props) => {
    const { children, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
    },
})
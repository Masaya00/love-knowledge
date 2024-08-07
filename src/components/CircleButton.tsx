import { Text, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
interface Props {
    children: JSX.Element
    style?: ViewStyle
    onPress?: () => void
}

const CircleButton = (props: Props) => {
    const { children, style, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{ children }</Text>
        </TouchableOpacity>
    )
}

export default CircleButton


const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 40,
        bottom: 48,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
    },
})
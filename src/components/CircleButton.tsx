import { View, Text, StyleSheet } from "react-native";

interface Props {
    text: string
}


const CircleButton = (props: Props) => {
    const { text } = props
    return (
        <View style={styles.circleAddButton}>
            <Text style={styles.circleAddButtonLabel}>{ text }</Text>
        </View>
    )
}

export default CircleButton


const styles = StyleSheet.create({
    circleAddButton: {
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
    circleAddButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
    },
})
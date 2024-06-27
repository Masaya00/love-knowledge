import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>Hello World</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#a0d8ef',
        height: 100,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center'
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
})
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Icon from '../../components/Icon'
import { router } from "expo-router";

const Detail = (): JSX.Element => {

    const handlePress = (): void => {
        router.push('/memo/edit')
    }

    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います
                    本文ようなので使い方を間違えると不自然に見えることがあります。
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{top: 60, bottom: 'auto'}}>
                <Icon name="pencil" size={40} color='#ffffff'></Icon>
            </CircleButton>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        paddingVertical: 24,
        paddingHorizontal: 24,
        justifyContent: 'center',
        height: 96,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})
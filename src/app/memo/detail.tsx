import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Icon from '../../components/Icon'
import { router, useLocalSearchParams } from "expo-router";
import { onSnapshot, doc } from "firebase/firestore";
import { auth, db } from "../../config";
import { useState, useEffect } from "react";
import { type Memo } from '../../../types/memo'

const Detail = (): JSX.Element => {

    const id = String(useLocalSearchParams().id)
    const [memo, setMemo] = useState<Memo | null>(null)

    useEffect(() => {
        if (auth.currentUser === null) return
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText: bodyText,
                updatedAt: updatedAt,
            })
        })
        return unsubscribe
    })

    const handlePress = (id: string): void => {
        router.push({ pathname: '/memo/edit', params: { id }})
    }

    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text numberOfLines={1} style={styles.memoTitle}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={() => handlePress(id)} style={{top: 60, bottom: 'auto'}}>
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
        paddingHorizontal: 27,
    },
    memoBodyText: {
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})
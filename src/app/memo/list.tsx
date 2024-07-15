import { View, StyleSheet, ImageBackground, FlatList } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import LogoutButton from '../../components/logoutButton'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'


const List = (): JSX.Element => {

    const [ memos, setMemos ] = useState<Memo[]>([])

    const handlePress = ():void => {
        router.push('/memo/create')
    }

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <LogoutButton />
                )
            }
        })
    }, [])

    useEffect(() => {
        if (auth.currentUser === null) {return}
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy('updatedAt', 'desc'))
        // snapshotは配列
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    bodyText: bodyText,
                    updatedAt: updatedAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => <MemoListItem memo={item} /> }
            />

            <CircleButton onPress={handlePress}>
                <Icon name="plus" size={40} color='#ffffff'></Icon>
            </CircleButton>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
})

export default List
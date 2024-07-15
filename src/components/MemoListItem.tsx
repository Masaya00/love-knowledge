import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from './Icon';
import { Link } from 'expo-router';
import { type Memo } from '../../types/memo'

interface Props {
    memo: Memo
}

const MemoListItem = (props: Props) => {

    const { memo } = props
    const { bodyText, updatedAt } = memo

    if (bodyText === null || updatedAt === null) { return null }

    const dateString = memo.updatedAt.toDate().toLocaleString('ja-JP')

    return (
        <Link
            href={{ pathname: '/memo/detail', params: { id: memo.id }}}
            asChild
        >
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateString}</Text>
                </View>
                <TouchableOpacity onPress={() => {Alert.alert('本当に削除しますか？')}}>
                    <Icon name='delete' size={30} color='#b0b0b0'></Icon>
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

export default MemoListItem


const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    },
    circleDeleteLabel: {
        fontSize: 24,
    },
})


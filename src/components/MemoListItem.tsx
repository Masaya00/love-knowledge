import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from './Icon';

const MemoListItem = () => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <TouchableOpacity onPress={() => {Alert.alert('本当に削除しますか？')}}>
                <Icon name='delete' size={30} color='#b0b0b0'></Icon>
            </TouchableOpacity>
        </View>
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


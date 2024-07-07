import { View, StyleSheet, ImageBackground } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '../../components/logoutButton'

const List = (): JSX.Element => {

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

    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>

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
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleButton from '../components/CircleButton'


const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>

            <CircleButton text='+' />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
})

export default Index
import { View, Text } from 'react-native'

import style from './home.scss'

export default function Home() {
    return (
        <View style={style.home}>
            <Text style={style.home__title}>Home</Text>
        </View>
    )
}
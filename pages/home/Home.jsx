import { View } from 'react-native'
import Card from '../../components/card/Card'

import style from './home.scss'

export default function Home() {
    return (
        <View style={style.home}>
            <Card/>
        </View>
    )
}
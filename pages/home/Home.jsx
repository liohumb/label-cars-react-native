import { View } from 'react-native'
import Card from '../../components/card/Card'

import style from './home.scss'

export default function Home(props) {
    return (
        <View style={style.home}>
            <Card nav={props.navigation}/>
        </View>
    )
}
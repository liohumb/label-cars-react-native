import { View, Text } from 'react-native'
import Card from '../../components/card/Card'
import Popular from '../../components/popular/Popular'

import style from './home.scss'

export default function Home(props) {
    return (
        <View style={style.home}>
            <Card nav={props.navigation}/>
            <View style={style.home__container}>
                <Text style={style.home__container_title}>Les plus réservés</Text>
                <Popular nav={props.navigation}/>
            </View>
        </View>
    )
}
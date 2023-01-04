import { View } from 'react-native'
import Cards from '../../components/cards/Cards'

import style from './cars.scss'

export default function Cars( props ) {
    return (
        <View style={style.cars}>
            <Cards nav={props.navigation}/>
        </View>
    )
}
import { View, Image, Text, TouchableOpacity } from 'react-native'
import cars from '../../data/cars'

import style from './card.scss'


export default function Card({nav}) {
    return (
        <TouchableOpacity onPress={() => nav.navigate('Nos véhicules')}
                          style={style.card}>
            <Image style={style.card__background}
                   source={require( '../../assets/images/hero.jpg' )}/>
            <View style={style.card__container}>
                <Text style={style.card__title}>{cars.length} Véhicules à découvrir</Text>
            </View>
        </TouchableOpacity>
    )
}
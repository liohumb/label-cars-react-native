import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native'
import cars from '../../data/cars'
import { compare } from '../../utils'

import style from './popular.scss'

export default function Popular( { nav } ) {

    const popular = cars.sort( compare ).slice( 0, 4 )

    const renderPopular = ( item ) => {
        return (
            <TouchableOpacity onPress={() => nav.navigate( 'Voiture', { item } )}
                              style={style.popular__card}>
                <Image style={style.popular__card_image} source={{ uri: item.image }}/>
                <View style={style.popular__card_infos}>
                    <Text style={style.popular__card_infos_name}>{item.name}</Text>
                    <Text style={style.popular__card_infos_price}>{item.price}€ par jour</Text>
                </View>
                <Text style={style.popular__button}>Réserver</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={style.popular}>
            <FlatList data={popular}
                      keyExtractor={( item ) => item.id}
                      renderItem={( { item } ) => renderPopular( item )}
                      numColumns={2}
                      style={style.popular__container}/>
        </View>
    )
}
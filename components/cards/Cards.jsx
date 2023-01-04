import { TouchableOpacity, View, Image, Text, ScrollView, FlatList } from 'react-native'
import cars from '../../data/cars'

import style from './cards.scss'

export default function Cards( { nav } ) {
    const renderCarsItem = ( item ) => {
        return (
            <TouchableOpacity onPress={() => nav.navigate( 'Voiture', { item } )}
                              style={style.cards__card}>
                <Image style={style.cards__image} source={{ uri: item.image }}/>
                <View style={style.cards__infos}>
                    <Text style={style.cards__infos_name}>{item.name}</Text>
                    <Text style={style.cards__infos_price}>{item.price}€ par jour</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView horizontal={true} style={style.cards}>
            <FlatList data={cars}
                      keyExtractor={( item ) => item.id}
                      renderItem={( { item } ) => renderCarsItem( item )}
                      style={style.cards__container}/>
        </ScrollView>
    )
}
import { TouchableOpacity, View, Image, Text, ScrollView, FlatList } from 'react-native'

import style from './cards.scss'

export default function Cards( { nav, data, active } ) {
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
        <ScrollView horizontal={true} centerContent={true} style={style.cards}>
            <FlatList data={data}
                      keyExtractor={( item ) => item.id}
                      renderItem={( { item } ) => renderCarsItem( item )}
                      showsVerticalScrollIndicator={false}
                      style={active ? style.cards__active : style.cards__container}/>
        </ScrollView>
    )
}
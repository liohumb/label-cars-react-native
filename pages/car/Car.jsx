import { View, Image, Text } from 'react-native'

import style from './car.scss'

export default function Car( props ) {
    const item = props.route.params.item

    return (
        <View style={style.car}>
            <View style={style.car__container}>
                <Image style={style.car__image} source={{ uri: item.image }}/>
                <View style={style.car__infos}>
                    <View style={style.car__infos_option}>
                        <Image style={style.car__infos_option_icon}
                               source={require('../../assets/icons/engine.png')}/>
                        <Text style={style.car__infos_option_name}>{item.options.transmission}</Text>
                    </View>
                    <View style={style.car__infos_option}>
                        <Image style={style.car__infos_option_icon}
                               source={require('../../assets/icons/doors.png')}/>
                        <Text style={style.car__infos_option_name}>{item.options.person} personnes</Text>
                    </View>
                    {item.options.navigation &&
                        <View style={style.car__infos_option}>
                            <Image style={style.car__infos_option_icon}
                                   source={require('../../assets/icons/compass.png')}/>
                            <Text style={style.car__infos_option_name}>GPS intégré</Text>
                        </View>}
                    {item.options.aircondition &&
                        <View style={style.car__infos_option}>
                            <Image style={style.car__infos_option_icon}
                                   source={require('../../assets/icons/snow.png')}/>
                            <Text style={style.car__infos_option_name}>Véhicule climatisé</Text>
                        </View>}
                </View>
            </View>
            <View style={style.car__footer}>
                <Text style={style.car__footer_price}>{item.price}€ par jour</Text>
            </View>
        </View>
    )
}
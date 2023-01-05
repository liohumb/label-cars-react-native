import { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Cards from '../../components/cards/Cards'
import Filter from '../../components/filter/Filter'
import cars from '../../data/cars'
import { airCondition, automatic, manual, NoAirCondition } from '../../utils'

import style from './cars.scss'

export default function Cars( props ) {
    const navigation = useNavigation()

    const [show, setShow] = useState( false )
    const [engine, setEngine] = useState( true )
    const [air, setAir] = useState( true )
    const [min, setMin] = useState( '0' )
    const [max, setMax] = useState( '700' )

    const toggleFilter = () => {
        if (show) {
            return setShow(false)
        } else {
            return setShow(true)
        }
    }

    useEffect( () => {
        navigation.setOptions({
            headerRight: () => <Button onPress={toggleFilter} title={show ? 'X' : 'Filtrer'} color="#fff"/>
        })
    }, [navigation, setShow])

    const toggleEngine = () => setEngine( !engine )
    const toggleAir = () => setAir( !air )

    const filteredCars = cars.filter( car => {
        if (engine && !air) {
            return automatic( car ) && NoAirCondition( car ) && car.price >= min && car.price <= max
        } else if (!engine && air) {
            return manual(car) && airCondition( car ) && car.price >= min && car.price <= max
        } else if (engine && air) {
            return automatic( car ) && airCondition( car ) && car.price >= min && car.price <= max
        } else if (!engine && !air) {
            return manual(car) && NoAirCondition( car ) && car.price >= min && car.price <= max
        } else {
            return car.price >= min && car.price <= max
        }
    } )

    return (
        <View style={style.cars}>
            <Filter show={show} minV={setMin} min={min} maxV={setMax} max={max}
                    engine={engine} air={air}
                    changeEngine={toggleEngine} changeAir={toggleAir}/>
            {filteredCars.length === 0 ?
                <View style={style.cars__empty}>
                    <Text style={style.cars__empty_text}>Aucun véhicule correspondant à votre recherche</Text>
                </View>
            :
                <Cards nav={props.navigation} data={show ? filteredCars : cars}/>
            }
        </View>
    )
}
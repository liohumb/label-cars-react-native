import { View, TextInput, Text, Switch } from 'react-native'

import style from './filter.scss'

export default function Filter( { show, minV, maxV, min, max, engine, air, changeEngine, changeAir } ) {
    return (
        <View style={show ? style.filter__active : style.filter}>
            <View style={style.filter_container}>
                <View style={style.filter__price}>
                    <Text style={style.filter__price_text}>Prix</Text>
                    <TextInput style={style.filter__price_input}
                               placeholder="prix minimum" onChangeText={( text ) => minV(text)} value={min}/>
                    <Text style={style.filter__price_separate}>—</Text>
                    <TextInput style={style.filter__price_input}
                               placeholder="prix maximum" onChangeText={( text ) => maxV(text)} value={max}/>
                </View>
                <View style={style.filter__options}>
                    <View style={style.filter__options_option}>
                        <Text style={style.filter__options_option_name}>Automatique</Text>
                        <Switch style={style.filter__options_option_check}
                                onValueChange={changeEngine} value={engine}/>
                    </View>
                    <View style={style.filter__options_option}>
                        <Text style={style.filter__options_option_name}>Climatisation</Text>
                        <Switch style={style.filter__options_option_check}
                                onValueChange={changeAir} value={air}/>
                    </View>
                </View>
            </View>
        </View>
    )
}
import { Image } from 'react-native'

import style from './logo.scss'

export default function Logo(  ) {
    return (
        <Image style={style.logo}
               source={require('../../assets/logos/logo-transparent.png')}/>
    )
}
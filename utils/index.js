import { AUTOMATIC, MANUAL } from '../data/cars'

export function compare( a, b ) {
    return b.reservations - a.reservations
}

export function automatic( a ) {
    return a.options.transmission === AUTOMATIC
}

export function manual(a) {
    return a.options.transmission === MANUAL
}

export function airCondition( a ) {
    return a.options.aircondition === true
}

export function NoAirCondition( a ) {
    return a.options.aircondition === false
}
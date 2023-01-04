export function compare( a, b ) {
    if ( a.reservations < b.reservations ){
        return -1;
    }
    if ( a.reservations > b.reservations ){
        return 1;
    }
    return 0;
}
export interface Default {
    have_first_class: boolean
    have_second_class: boolean
    have_third_class: boolean
    have_fourth_class: boolean
    have_wifi: boolean
    have_air_conditioning: boolean
    is_express: boolean
    min_price: number
}

export interface Info {
    datetime: number
    railway_station_name: string
    city: string
}

export interface Arrival extends Default {
    train: string
    from: Info
    to: Info
    duration: number
    price_info: unknown
    seats_info: unknown
}

export interface Item extends Default {
    arrival: Arrival
    departure: Arrival
    total_avaliable_seats: number
}

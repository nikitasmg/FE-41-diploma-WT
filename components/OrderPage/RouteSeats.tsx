import React from 'react'

const RouteSeats = () => {
    return (
        <li className="flex items-center gap-[10px] text-black-100">
            <span>Сидячий</span>
            <span className="font-500 text-accent">88</span>
            <span className="flex items-center gap-2 text-grey-150">
                от
                <span className="text-2xl font-bold text-black-100">1890</span>
                <span className="text-3xl">₽</span>
            </span>
        </li>
    )
}

export default RouteSeats

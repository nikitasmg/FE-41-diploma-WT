import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import type { IRoute } from '../../models'

type LastTicketItemType = {
    item: IRoute.Item
}

const OrderLastTicketItem: FC<LastTicketItemType> = ({ item }) => {
    return (
        <div className="border-[1px] border-grey-300 p-5 shadow-lg">
            <div className="mb-[30px] flex justify-between">
                <div className="flex flex-col ">
                    <span className="text-2xl">{item.departure.from.city}</span>
                    <span className="text-grey-150">
                        {item.departure.from.railway_station_name}
                    </span>
                </div>
                <div className="flex flex-col ">
                    <span className="text-2xl">{item.arrival.from.city}</span>
                    <span className="text-grey-150">
                        {item.arrival.from.railway_station_name}
                    </span>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="mb-3 flex gap-[10px]">
                    <Image
                        className="max-h-[27px] max-w-[27px]"
                        width={27}
                        height={27}
                        src={`/icons/filter/icon-wifi.svg`}
                        alt={'wifi'}
                    />
                    <Image
                        className="max-h-[27px] max-w-[27px]"
                        width={27}
                        height={27}
                        src={`/icons/filter/icon-express.svg`}
                        alt={'wifi'}
                    />
                    <Image
                        className="max-h-[27px] max-w-[27px]"
                        width={27}
                        height={27}
                        src={`/icons/filter/icon-coffee.svg`}
                        alt={'wifi'}
                    />
                </div>
                <div>
                    <span className="text-grey-150">от</span>{' '}
                    <span className="text-4xl font-bold text-accent">
                        {item.min_price}{' '}
                        <span className=" text-grey-150">₽</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OrderLastTicketItem

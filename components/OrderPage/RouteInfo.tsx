import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import formatTime from '../../commons/helpers/formatTime'
import type { IRoute } from '../../models'

interface RouteProps {
    item: IRoute.Arrival
    type: 'arrival' | 'departure'
}

const RouteInfo: FC<RouteProps> = ({ item, type }) => {
    return (
        <div className="flex gap-[50px]">
            <div>
                <div className="text-black text-[24px] font-bold">
                    {formatTime(item.from.datetime)}
                </div>
                <div className="text-[18px]">{item.from.city}</div>
                <div className="text-grey-150">
                    {item.from.railway_station_name}
                </div>
            </div>
            <div>
                <div className="mb-[10px] text-[18px] text-grey-300">
                    {formatTime(item.duration)}
                </div>
                <Image
                    width={30}
                    height={20}
                    src={'/icons/route/icon-arrow.svg'}
                    alt={'icon-arroew'}
                    className={type === 'departure' ? 'rotate-180' : ''}
                />
            </div>
            <div>
                <div className="text-black text-[24px] font-bold">
                    {formatTime(item.to.datetime)}
                </div>
                <div className="text-[18px]">{item.to.city}</div>
                <div className="text-grey-150">
                    {item.to.railway_station_name}
                </div>
            </div>
        </div>
    )
}

export default RouteInfo

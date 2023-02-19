import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import type { IRoute } from '../../models'

interface RoteProps {
    item: IRoute.Arrival
    type: 'arrival' | 'departure'
}

const RoteInfo: FC<RoteProps> = ({ item, type }) => {
    return (
        <div>
            <div>
                <div className="text-black text-[24px] font-bold">
                    {item.from.datetime}
                </div>
                <div className="text-[18px]">{item.from.city}</div>
                <div className="text-grey-150">
                    {item.from.railway_station_name}
                </div>
            </div>
            <div>
                <div className="text-gray-300 text-[18px]">{item.duration}</div>
                <Image
                    width={30}
                    height={20}
                    src={'/icon/route/icon-arrow.svg'}
                    alt={'icon-arroew'}
                    className={type === 'departure' ? 'rotate-180' : ''}
                />
            </div>
            <div>
                <div className="text-black text-[24px] font-bold">
                    {item.to.datetime}
                </div>
                <div className="text-[18px]">{item.to.city}</div>
                <div className="text-grey-150">
                    {item.to.railway_station_name}
                </div>
            </div>
        </div>
    )
}

export default RoteInfo

import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import type { IRoute } from '../../models'
import WtButton from '../UI/WTButton/WTButton'
import RouteInfo from './RouteInfo'
import RouteSeats from './RouteSeats'

type RoteProps = {
    item: IRoute.Item
}

const RouteItem: FC<RoteProps> = ({ item }) => {
    return (
        <div className="flex w-full border-[2px] border-grey-300">
            <div className="w-[200px] bg-grey-400 py-[58px] px-[40px]">
                <Image
                    width={86}
                    height={86}
                    alt={'train icon'}
                    src={'/icons/icon-train.svg'}
                    className="mb-[20px]"
                />
                <div className="text-[24px] font-bold">
                    {item.arrival.train}
                </div>
                <div className="flex flex-col">
                    <span className="flex gap-2">
                        {item.departure.from.city}{' '}
                        <Image
                            src="/icons/icon-arrow-small.svg"
                            alt={'icon-arroew'}
                            width={15}
                            height={5}
                        />{' '}
                    </span>
                    <span className="flex gap-2">
                        {item.departure.to.city}{' '}
                        <Image
                            src="/icons/icon-arrow-small.svg"
                            alt={'icon-arroew'}
                            width={15}
                            height={5}
                        />{' '}
                    </span>
                    <span className="flex gap-2">
                        {item.arrival.from.city}{' '}
                        <Image
                            src="/icons/icon-arrow-small.svg"
                            alt={'icon-arroew'}
                            width={15}
                            height={5}
                        />{' '}
                    </span>
                    <span className="flex gap-2">{item.arrival.to.city} </span>
                </div>
            </div>
            <div className="flex grow flex-col gap-[60px] border-r-[1px] border-dashed border-grey-200 p-[40px]">
                <RouteInfo item={item.arrival} type={'arrival'} />
                <RouteInfo item={item.departure} type={'departure'} />
            </div>
            <div className="w-[276px] py-[40px] px-[27px]">
                <ul className="mb-5 flex flex-col gap-[27px]">
                    {[...Array(5)].map((_, idx) => (
                        <RouteSeats key={idx} />
                    ))}
                </ul>
                <div className="mb-3 flex gap-[10px]">
                    {item.have_wifi && (
                        <Image
                            className="max-h-[27px] max-w-[27px]"
                            width={27}
                            height={27}
                            src={`/icons/filter/icon-wifi.svg`}
                            alt={'wifi'}
                        />
                    )}
                    {item.is_express && (
                        <Image
                            className="max-h-[27px] max-w-[27px]"
                            width={27}
                            height={27}
                            src={`/icons/filter/icon-express.svg`}
                            alt={'wifi'}
                        />
                    )}
                </div>
                <WtButton
                    type="button"
                    className="px-[15px] py-[5px] text-2xl font-bold !text-white active:!text-accent"
                >
                    Выбрать места
                </WtButton>
            </div>
        </div>
    )
}

export default RouteItem

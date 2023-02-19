import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import type { IRoute } from '../../models'
import RoteInfo from './RoteInfo'

type RoteProps = {
    item: IRoute.Item
}

const RoteItem: FC<RoteProps> = ({ item }) => {
    return (
        <div>
            <div>
                <Image
                    width={86}
                    height={86}
                    alt={'train icon'}
                    src={'/icons/icon-train.svg'}
                />
                <div>{item.arrival.train}</div>
            </div>
            <div>
                <RoteInfo item={item.arrival} type={'arrival'} />
                <RoteInfo item={item.departure} type={'departure'} />
            </div>
        </div>
    )
}

export default RoteItem

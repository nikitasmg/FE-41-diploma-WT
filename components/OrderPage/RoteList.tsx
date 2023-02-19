import type { FC } from 'react'
import React from 'react'

import type { IRoute } from '../../models'
import RoteItem from './RoteItem'

interface ListProps {
    items: IRoute.Item[]
}

const RoteList: FC<ListProps> = ({ items }) => {
    return (
        <div>
            {items.map((el, idx) => (
                <RoteItem
                    key={el.arrival.train + idx + el.departure.train}
                    item={el}
                />
            ))}
        </div>
    )
}

export default RoteList

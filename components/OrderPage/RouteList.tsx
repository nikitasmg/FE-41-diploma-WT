import type { FC } from 'react'
import React from 'react'

import type { IRoute } from '../../models'
import RouteItem from './RouteItem'

interface ListProps {
    items: IRoute.Item[]
}

const RouteList: FC<ListProps> = ({ items }) => {
    return (
        <div className="flex flex-col gap-[27px]">
            {items.map((el, idx) => (
                <RouteItem
                    key={el.arrival.train + idx + el.departure.train}
                    item={el}
                />
            ))}
        </div>
    )
}

export default RouteList

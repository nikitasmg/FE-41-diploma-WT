import type { FC } from 'react'

import type { IRoute } from '../../models'
import OrderLastTicketItem from './OrderLastTicketItem'

type OrderLastTicketsProps = {
    items: IRoute.Item[]
}

const OrderLastTickets: FC<OrderLastTicketsProps> = ({ items }) => {
    const currentList = items.slice(0, 3)
    return (
        <div className="mt-[90px] ">
            <h3 className="mb-[28px] text-3xl font-[500] uppercase">
                последние билеты
            </h3>
            <div className="flex flex-col gap-4">
                {currentList.map((el) => (
                    <OrderLastTicketItem
                        key={el.departure.duration}
                        item={el}
                    />
                ))}
            </div>
        </div>
    )
}

export default OrderLastTickets

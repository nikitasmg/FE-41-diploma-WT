import React from 'react'

import { CONSTANTS } from '../../commons/constants'
import OrderFilter from '../../components/OrderLayout/OrderFilter'
import OrderHeader from '../../components/OrderLayout/OrderHeader'
import OrderSort from '../../components/OrderLayout/OrderSort'
import OrderSteps from '../../components/OrderLayout/OrderSteps'
import OrderLastTickets from '../../components/OrderPage/OrderLastTickets'

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <>
            <OrderHeader />
            <OrderSteps />
            <div className="mx-auto flex max-w-7xl gap-[80px] pt-[100px] pb-[122px]">
                <div className="">
                    <OrderFilter />
                    <OrderLastTickets items={CONSTANTS.ROUTES} />
                </div>
                <div className="grow">
                    <OrderSort className="mb-[50px]" count={20} />
                    {children}
                </div>
            </div>
            {/* <div className="mx-auto mb-[193px] flex max-w-7xl justify-end"> */}
            {/*   */}
            {/* </div> */}
        </>
    )
}

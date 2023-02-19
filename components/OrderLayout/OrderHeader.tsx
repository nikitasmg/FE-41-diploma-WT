'use client'

import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import React, { useState } from 'react'

import OrderForm from '../MainPage/OrderForm'

const OrderHeader = () => {
    const [directionFrom, setDirectionFrom] = useState('')
    const [directionTo, setDirectionTo] = useState('')
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const router = useRouter()
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push('/order')
    }
    return (
        <header className="bg-black relative z-0 pt-[400px]">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/order-bg.png')" }}
            />
            <div>
                <OrderForm
                    directionFrom={directionFrom}
                    setDirectionFrom={setDirectionFrom}
                    directionTo={directionTo}
                    setDirectionTo={setDirectionTo}
                    setEndDate={setEndDate}
                    setStartDate={setStartDate}
                    startDate={startDate}
                    endDate={endDate}
                    onSubmit={onSubmit}
                    row
                />
            </div>
        </header>
    )
}

export default OrderHeader

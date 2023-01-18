'use client'

import { useRouter } from 'next/navigation'
import type { FC, FormEvent } from 'react'
import React, { useState } from 'react'

import OrderForm from '../MainPage/OrderForm'

const WTHeader: FC = () => {
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
        <header className="relative z-0 mb-[144px] border-b-8 border-accent bg-brown pt-[400px]">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: "url('/main-background.png')" }}
            />
            <div className="mx-auto flex max-w-7xl items-center justify-end gap-[100px]">
                <h1 className="text-7xl font-thin text-white">
                    Вся жизнь - <br />{' '}
                    <span className="font-black">путешествие!</span>
                </h1>
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
                />
            </div>
        </header>
    )
}

export default WTHeader

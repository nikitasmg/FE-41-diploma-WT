'use client'

import type { FC } from 'react'
import React, { useState } from 'react'

import OrderForm from '../MainPage/OrderForm'

const WTHeader: FC = () => {
    const [direction, setDirection] = useState('')
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
                <OrderForm direction={direction} setDirection={setDirection} />
            </div>
        </header>
    )
}

export default WTHeader

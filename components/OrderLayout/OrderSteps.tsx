'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import type { IStep } from '../../models/index'

const OrderSteps = () => {
    const steps: IStep.Item[] = [
        { id: 1, name: 'Билеты', href: '#', isActive: true },
        { id: 2, name: 'Пассажири', href: '#', isActive: false },
        { id: 3, name: 'Оплата', href: '#', isActive: false },
        { id: 4, name: 'Проверка', href: '#', isActive: false },
    ]

    const currentImage = (el: IStep.Item) => {
        return el.isActive ? (
            <Image
                className={`absolute -right-[49px] z-10 h-full`}
                width={50}
                height={100}
                src={'/icons/icon-test.svg'}
                alt={'triangle'}
            />
        ) : (
            <Image
                className={`absolute -right-[48px] z-10 h-full`}
                width={40}
                height={100}
                src={'/icons/icon-triangle.png'}
                alt={'triangle'}
            />
        )
    }
    return (
        <div className="flex justify-between">
            {steps.map((el: IStep.Item) => (
                <Link
                    key={el.id}
                    href={el.href}
                    className={`relative flex grow items-center justify-center gap-[30px] py-[35px] text-4xl text-white ${
                        el.isActive ? 'bg-accent' : 'bg-black-100'
                    }`}
                >
                    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-white p-4 text-4xl text-white">
                        {el.id}
                    </div>
                    <span>{el.name}</span>
                    {el.id !== steps.length && currentImage(el)}
                </Link>
            ))}
        </div>
    )
}

export default OrderSteps

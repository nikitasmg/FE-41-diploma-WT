import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import WTButton from '../UI/WTButton/WTButton'
import WTInput from '../UI/WtInput/WTInput'

type FormTypes = {
    direction: string
    setDirection: (value: string) => void
}

const OrderForm: FC<FormTypes> = ({ direction, setDirection }) => {
    return (
        <form className="flex min-w-[730px] flex-col bg-black-80 px-5 py-[60px]">
            <span className="mb-[7px] text-3xl font-light text-white">
                Направление
            </span>
            <div className="mb-[60px] flex items-center gap-2">
                <WTInput
                    value={direction}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDirection(e.target.value)
                    }
                    className={''}
                    placeholder="Откуда"
                    icon="direction"
                    full
                />
                <Image
                    src={'/icons/icon-circle.svg'}
                    alt={'svg'}
                    width={24}
                    height={24}
                    className="shrink-0"
                />
                <WTInput
                    value={direction}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDirection(e.target.value)
                    }
                    className={''}
                    placeholder="Откуда"
                    icon="direction"
                    full
                />
            </div>
            <span className="mb-[7px] text-3xl font-light text-white">
                Дата
            </span>
            <div className="mb-[92px] flex items-center gap-10">
                <WTInput
                    value={direction}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDirection(e.target.value)
                    }
                    className={''}
                    placeholder="ДД/ММ/ГГ"
                    icon="date"
                    full
                />
                <WTInput
                    value={direction}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDirection(e.target.value)
                    }
                    className={''}
                    placeholder="ДД/ММ/ГГ"
                    icon="date"
                    full
                />
            </div>
            <WTButton className="self-end rounded-lg py-[18px] px-[68px] text-2xl ">
                НАЙТИ БИЛЕТЫ
            </WTButton>
        </form>
    )
}

export default OrderForm

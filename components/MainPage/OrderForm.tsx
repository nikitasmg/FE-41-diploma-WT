import Image from 'next/image'
import type { FC, FormEvent } from 'react'
import React from 'react'

import WtAutoComplete from '../UI/WtAutoComplete/WtAutoComplete'
import WTButton from '../UI/WTButton/WTButton'
import { WTDatePicker } from '../UI/WTDatepicker/WTDatePicker'

type FormTypes = {
    directionFrom: string
    setDirectionFrom: (value: string) => void
    directionTo: string
    setDirectionTo: (value: string) => void
    startDate: Date | null
    endDate: Date | null
    setStartDate: (value: Date) => void
    setEndDate: (value: Date) => void
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    row?: boolean
}

const OrderForm: FC<FormTypes> = ({
    directionFrom,
    directionTo,
    setDirectionFrom,
    setDirectionTo,
    setEndDate,
    setStartDate,
    startDate,
    endDate,
    onSubmit,
    row,
}) => {
    const changeCities = () => {
        setDirectionTo(directionFrom)
        setDirectionFrom(directionTo)
    }
    return (
        <form
            className={`mx-auto flex min-w-[730px] max-w-[1490px] flex-col bg-black-80 px-5  ${
                row ? 'pt-[28px] pb-[76px]' : 'py-[60px]'
            }`}
            onSubmit={(e) => onSubmit(e)}
        >
            <div
                className={`flex w-full ${
                    row ? 'mb-[47px] flex-row' : 'mb-[92px] flex-col'
                }`}
            >
                <div
                    className={`flex flex-col ${
                        row ? 'mr-[35px] grow' : 'mb-[60px]'
                    }`}
                >
                    <span className="mb-[7px] block text-3xl font-light text-white">
                        Направление
                    </span>
                    <div className="flex items-center gap-2">
                        <WtAutoComplete full placeholder="Куда" />

                        <button
                            className={'shrink-0'}
                            onClick={changeCities}
                            type={'button'}
                        >
                            <Image
                                src={'/icons/icon-circle.svg'}
                                alt={'svg'}
                                width={24}
                                height={24}
                                className="shrink-0"
                            />
                        </button>
                        <WtAutoComplete full placeholder="Откуда" />
                    </div>
                </div>

                <div className={'grow flex-col'}>
                    <span className="mb-[7px] block text-3xl font-light text-white">
                        Дата
                    </span>
                    <div className="flex items-center gap-10">
                        <WTDatePicker
                            value={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        />
                        <WTDatePicker
                            value={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                        />
                    </div>
                </div>
            </div>

            <WTButton
                type={'submit'}
                className="self-end rounded-lg py-[18px] px-[70px] text-2xl "
            >
                НАЙТИ БИЛЕТЫ
            </WTButton>
        </form>
    )
}

export default OrderForm

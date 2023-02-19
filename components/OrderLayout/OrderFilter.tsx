'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { CONSTANTS } from '../../commons/constants'
import { WTDatePicker } from '../UI/WTDatepicker/WTDatePicker'
import WtRange from '../UI/WtRange/WtRange'
import WtRangeTime from '../UI/WtRange/WtRangeTime'
import WtSwitch from '../UI/WtSwitch'

const OrderFilter = () => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [value, setValue] = useState(false)
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [isToOpen, setIsToOpen] = useState(false)
    return (
        <div className="bg-black-100 pt-[43px]">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-grey-200 px-[28px] pb-[30px]">
                <label className="flex flex-col gap-4">
                    <span className="text-3xl text-white">Дата поездки</span>
                    <WTDatePicker
                        className="py-[8px]"
                        value={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                    />
                </label>
                <label className="flex flex-col gap-4">
                    <span className="text-3xl text-white">
                        Дата возвращения
                    </span>
                    <WTDatePicker
                        className="py-[8px]"
                        value={endDate}
                        onChange={(date: Date) => setEndDate(date)}
                    />
                </label>
            </div>
            <div className="space-y-[25px] border-b-[1px] border-b-grey-200 py-[25px] pr-[28px] pl-[50px]">
                {CONSTANTS.SWITCHERS.map((el) => (
                    <div
                        key={el.id}
                        className="flex justify-between gap-[34px]"
                    >
                        <Image
                            className="max-h-[27px] max-w-[27px]"
                            width={27}
                            height={27}
                            src={`/icons/filter/icon-${el.icon}.svg`}
                            alt={el.name}
                        />
                        <span className="grow text-white">{el.name}</span>
                        <WtSwitch value={value} setValue={(e) => setValue(e)} />
                    </div>
                ))}
            </div>
            <div className="border-b-[1px] border-b-grey-200 px-[28px] pt-[27px] pb-[63px]">
                <div className="mb-[20px] text-3xl text-white">Стоимость </div>
                <WtRange value={[0, 7000]} min={1920} max={7000} />
            </div>
            <div className="border-b-[1px] border-b-grey-200 p-[32px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                        <Image
                            width={32}
                            height={26}
                            src={'/icons/icon-arrow-right.svg'}
                            alt={'icon-arrow-small'}
                        />
                        <div className=" text-3xl text-white">Туда</div>
                    </div>
                    <div
                        className="relative h-[20px] w-[20px] cursor-pointer rounded border-[2px] border-white"
                        onClick={() => setIsToOpen((val) => !val)}
                    >
                        <span className="absolute inset-1/2 h-[2px] w-[13px] -translate-y-1/2 -translate-x-1/2 bg-white" />
                        <span
                            className={`absolute inset-1/2 h-[2px] w-[13px] -translate-y-1/2 -translate-x-1/2 bg-white transition ${
                                !isToOpen && 'rotate-90'
                            }`}
                        />
                    </div>
                </div>
                <div className={isToOpen ? 'pt-[32px] pb-[67px]' : 'hidden'}>
                    <div className="mb-2 text-2xl font-[400] text-grey-200">
                        Время отбытия
                    </div>
                    <WtRangeTime className="mb-[60px]" />
                    <div className="mb-2 text-end text-2xl font-[400] text-grey-200">
                        Время прибытия
                    </div>
                    <WtRangeTime />
                </div>
            </div>
            <div className="border-b-[1px] border-b-grey-200 p-[32px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                        <Image
                            width={32}
                            height={26}
                            src={'/icons/icon-arrow-left.svg'}
                            alt={'icon-arrow-small'}
                        />
                        <div className=" text-3xl text-white">Обратно</div>
                    </div>
                    <div
                        className="relative h-[20px] w-[20px] cursor-pointer rounded border-[2px] border-white"
                        onClick={() => setIsFromOpen((val) => !val)}
                    >
                        <span className="absolute inset-1/2 h-[2px] w-[13px] -translate-y-1/2 -translate-x-1/2 bg-white" />
                        <span
                            className={`absolute inset-1/2 h-[2px] w-[13px] -translate-y-1/2 -translate-x-1/2 bg-white transition ${
                                !isFromOpen && 'rotate-90'
                            }`}
                        />
                    </div>
                </div>
                <div className={isFromOpen ? 'pt-[32px] pb-[67px]' : 'hidden'}>
                    <div className="mb-2 text-2xl font-[400] text-grey-200">
                        Время отбытия
                    </div>
                    <WtRangeTime className="mb-[60px]" />
                    <div className="mb-2 text-end text-2xl font-[400] text-grey-200">
                        Время прибытия
                    </div>
                    <WtRangeTime />
                </div>
            </div>
        </div>
    )
}

export default OrderFilter

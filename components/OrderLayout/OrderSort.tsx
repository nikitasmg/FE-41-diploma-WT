'use client'

import type { FC } from 'react'
import React, { useState } from 'react'

type SortProps = {
    count?: number
    className?: string
}

const OrderSort: FC<SortProps> = ({ className, count }) => {
    const [activeCount, setActiveCount] = useState(5)
    return (
        <div
            className={`flex w-full items-center justify-between ${className}`}
        >
            <div className="text-grey-150">
                найдено: <span>{count}</span>
            </div>
            <div className="flex items-center gap-[50px]">
                <div className="text-grey-150">
                    сортировать по:{' '}
                    <span className="text-black-300">времени</span>
                </div>
                <div className="flex items-center gap-[10px] text-grey-150">
                    показывать по:
                    <div className="flex gap-[5px]">
                        <span
                            className={`cursor-pointer ${
                                activeCount === 5 && 'text-black-300'
                            }`}
                            onClick={() => setActiveCount(5)}
                        >
                            5
                        </span>
                        <span
                            className={`cursor-pointer ${
                                activeCount === 10 && 'text-black-300'
                            }`}
                            onClick={() => setActiveCount(10)}
                        >
                            10
                        </span>
                        <span
                            className={`cursor-pointer ${
                                activeCount === 15 && 'text-black-300'
                            }`}
                            onClick={() => setActiveCount(15)}
                        >
                            15
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSort

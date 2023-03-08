'use client'

import Image from 'next/image'
import type { FC } from 'react'
import React, { useState } from 'react'

type BasePaginationProps = {
    className?: string
    pagesCount: number
}

const BasePagination: FC<BasePaginationProps> = ({ className, pagesCount }) => {
    const [active, setActive] = useState(0)

    const goNext = () => {
        if (active + 1 < pagesCount) {
            setActive((val) => val + 1)
        }
    }

    const goBack = () => {
        if (active + 1 > 1) {
            setActive((val) => val - 1)
        }
    }
    return (
        <div className={`${className} flex items-center gap-[35px]`}>
            <div
                className="flex h-[75px] w-[85px] items-center justify-center rounded border-[2px] border-grey-200 hover:border-accent "
                onClick={goBack}
            >
                <Image
                    width={18}
                    height={29}
                    alt="arrow"
                    src="/icons/icon-arrow-pag.svg"
                />
            </div>
            {[...Array(pagesCount)].map((el, idx) => (
                <div
                    className={`flex h-[75px] w-[85px] items-center justify-center rounded border-[2px] border-grey-200 text-3xl font-bold hover:border-accent ${
                        active === idx ? 'bg-accent text-white' : ''
                    }`}
                    key={idx}
                    onClick={() => setActive(idx)}
                >
                    <span>{idx + 1}</span>
                </div>
            ))}
            <div
                className="flex h-[75px] w-[85px] items-center justify-center rounded border-[2px] border-grey-200"
                onClick={goNext}
            >
                <Image
                    width={18}
                    height={29}
                    alt="arrow"
                    src="/icons/icon-arrow-pag.svg"
                    className="rotate-180"
                />
            </div>
        </div>
    )
}

export default BasePagination

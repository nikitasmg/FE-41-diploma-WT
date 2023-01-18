'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import type { FC } from 'react'
import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

interface SwiperWrapperProps {
    children: React.ReactNode
    space?: number | undefined
    perView?: number | undefined
    className?: string
}

export const SwiperWrapper: FC<SwiperWrapperProps> = ({
    children,
    space = 0,
    perView = 0,
    className,
}) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            spaceBetween={space}
            slidesPerView={perView}
            className={className}
        >
            {children}
        </Swiper>
    )
}

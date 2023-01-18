'use client'

import React from 'react'
import { SwiperSlide } from 'swiper/react'

import { CONSTANTS } from '../../commons/constants'
import type { IUser } from '../../models'
import { SwiperWrapper } from '../UI/SwiperWrapper/SwiperWrapper'
import ReviewItem from './ReviewItem'

const Reviews = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <h3 className="mb-6 text-4xl">Отзывы</h3>
            <SwiperWrapper space={85} perView={2} className="!pb-[100px]">
                {CONSTANTS.REVIEWS.map((review: IUser.Review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewItem {...review} />
                    </SwiperSlide>
                ))}
            </SwiperWrapper>
        </div>
    )
}

export default Reviews

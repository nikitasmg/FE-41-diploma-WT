import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

import type { IUser } from '../../models'

const ReviewItem: FC<IUser.Review> = ({ img, name, content }) => {
    return (
        <div className="flex cursor-pointer items-center space-x-[35px]">
            <Image
                className="flex-0 min-h-[206px] rounded-full"
                src={img}
                width={206}
                height={206}
                alt={'avatar'}
            />
            <div>
                <span className="mb-5 block text-2xl font-medium">{name}</span>
                <p className="relative text-[18px] font-light text-disable before:absolute before:left-[-15px] before:-top-5 before:text-[50px] before:content-['“'] after:absolute after:-bottom-12  after:text-[50px] after:content-['”']">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default ReviewItem

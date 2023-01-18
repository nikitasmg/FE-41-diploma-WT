import Image from 'next/image'
import React from 'react'

import WtButton from '../UI/WTButton/WTButton'

const HowItWorks = () => {
    return (
        <div className="relative z-0 mt-[90px] mb-[150px] bg-brown pt-[70px] pb-[90px]">
            <img
                src="/how-it-works.png"
                className="absolute inset-0 -z-10 h-full w-full drop-shadow-xl"
            />
            <div className="mx-auto max-w-7xl">
                <div className="z-5 mb-[120px] flex items-center justify-between">
                    <h4 className="text-[36px] uppercase text-white">
                        Как это работает
                    </h4>
                    <WtButton outlined>Узнать больше</WtButton>
                </div>
                <ul className="flex items-center justify-center space-x-[240px] text-center text-2xl text-white">
                    <li className="flex flex-col items-center justify-center space-y-9">
                        <div className="flex h-[162px] w-[162px] items-center justify-center rounded-full bg-bg-grey-opacity">
                            <Image
                                src="/icons/icon-desktop.svg"
                                width={135}
                                height={135}
                                alt="logo"
                            />
                        </div>
                        <span>
                            Удобный заказ <br /> на сайте
                        </span>
                    </li>
                    <li className="flex flex-col items-center justify-center space-y-9">
                        <div className="flex h-[162px] w-[162px] items-center justify-center rounded-full bg-bg-grey-opacity">
                            <Image
                                src="/icons/icon-office.svg"
                                width={135}
                                height={135}
                                alt="logo"
                            />
                        </div>
                        <span>
                            Нет необходимости <br /> ехать в офис
                        </span>
                    </li>
                    <li className="flex flex-col items-center justify-center space-y-9">
                        <div className="flex h-[162px] w-[162px] items-center justify-center rounded-full bg-bg-grey-opacity">
                            <Image
                                src="/icons/icon-earth.svg"
                                width={135}
                                height={135}
                                alt="logo"
                            />
                        </div>
                        <span>
                            Огромный выбор <br /> направлений
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HowItWorks

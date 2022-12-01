'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { CONSTANTS } from '../../commons/constants'
import type { IFooter } from '../../models'
import WtButton from '../UI/WTButton/WTButton'
import WTInput from '../UI/WtInput/WTInput'

const WtFooter = () => {
    const [mail, setMail] = useState('')
    return (
        <footer className="w-full bg-black-300 pt-[50px]">
            <div className="mx-auto flex max-w-7xl">
                <div className="mr-[250px] flex flex-col pl-[70px] pb-[50px] text-white">
                    <span className="mb-[30px] text-3xl font-medium">
                        Свяжитесь с нами
                    </span>
                    <ul className="g flex max-w-[300px] flex-col gap-[30px]">
                        {CONSTANTS.SOCIALS.map((item: IFooter.Socials) => (
                            <li key={item.value}>
                                <a
                                    href={item.href}
                                    className="flex items-center gap-[36px] text-2xl"
                                >
                                    <Image
                                        className="min-w-[30px]"
                                        src={`/icons/icon-${item.icon}.svg`}
                                        alt={'svg'}
                                        width={30}
                                        height={30}
                                    />
                                    {item.value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span className="mb-[30px] block text-3xl font-medium text-white">
                        Подписка
                    </span>
                    <form>
                        <label>
                            <span className="mb-5 block text-2xl text-white">
                                Будьте в курсе событий
                            </span>
                            <div className="mb-[44px] flex items-center gap-[30px]">
                                <WTInput
                                    className="min-w-[450px]"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                />
                                <WtButton
                                    className="px-[15px] py-[17px] text-2xl uppercase"
                                    outlined={true}
                                >
                                    отправить
                                </WtButton>
                            </div>
                        </label>
                    </form>
                    <div>
                        <span className="mb-[28px] block text-3xl font-medium text-white">
                            Подписывайтесь на нас
                        </span>
                        <ul className="flex items-center gap-[48px]">
                            {CONSTANTS.SUBSCRIPTIONS.map((item) => (
                                <li key={item} className="max-w-[30px]">
                                    <Image
                                        className="max-h-[30px]"
                                        src={`/icons/icon-${item}.svg`}
                                        alt={`icon - ${item}`}
                                        width={30}
                                        height={30}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-grey-200 py-[32px]">
                <div className="mx-auto flex max-w-7xl justify-between">
                    <span className="text-4xl font-black text-white">Logo</span>
                    <button>top</button>
                    <span className="text-2xl font-light text-grey-200">
                        2018 WEB
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default WtFooter

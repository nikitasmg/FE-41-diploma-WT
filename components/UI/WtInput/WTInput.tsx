import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

type InputProps = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    icon?: 'date' | 'direction'
    full?: boolean
}

const WtInput: FC<InputProps> = ({
    value,
    onChange,
    className,
    placeholder,
    icon,
    full = false,
}) => {
    return (
        <label className={`relative ${full && 'w-full'}`}>
            <input
                value={value}
                onChange={(event) => onChange(event)}
                placeholder={placeholder}
                className={` rounded-sm bg-white py-5 pl-5 pr-10 text-lg placeholder:text-lg placeholder:font-normal placeholder:text-grey-300 focus:outline-0 ${className} ${
                    full && 'w-full'
                }`}
            />
            {icon && (
                <Image
                    className="absolute top-1/2 right-[13px] -translate-y-1/2"
                    src={`/icons/icon-${icon}.svg`}
                    alt={'svg'}
                    width={24}
                    height={24}
                />
            )}
        </label>
    )
}

export default WtInput

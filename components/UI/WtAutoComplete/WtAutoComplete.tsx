import { Combobox } from '@headlessui/react'
import Image from 'next/image'
import type { FC } from 'react'
import React, { useState } from 'react'

export type TCity = {
    id: number
    name: string
}
const cities: TCity[] = [
    {
        id: 1,
        name: 'Тюмень',
    },
    {
        id: 2,
        name: 'Москва',
    },
    {
        id: 3,
        name: 'Екатеринбург',
    },
    {
        id: 4,
        name: 'Омск',
    },
]

type AutoCompleteProps = {
    className?: string
    full?: boolean
    placeholder?: string
}

const WtAutoComplete: FC<AutoCompleteProps> = ({
    className,
    full,
    placeholder,
}) => {
    const [selectedPerson, setSelectedPerson] = useState({})
    const [query, setQuery] = useState('')

    const filteredCities =
        query === ''
            ? cities
            : cities.filter((city) => {
                  return city.name.toLowerCase().includes(query.toLowerCase())
              })

    return (
        <div className={full ? 'relative w-full' : 'relative'}>
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                <div className={full ? 'relative w-full' : 'relative'}>
                    <Combobox.Input
                        className={` rounded-sm bg-white py-5 pl-5 pr-10 text-lg placeholder:text-lg placeholder:font-normal placeholder:text-grey-300 focus:outline-0 ${className} ${
                            full && 'w-full'
                        }`}
                        placeholder={placeholder}
                        displayValue={(city: TCity) => city.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Image
                        className="rounded-200 absolute top-1/2 right-[13px] -translate-y-1/2 "
                        src={`/icons/icon-direction.svg`}
                        alt={'svg'}
                        width={24}
                        height={24}
                    />
                </div>

                <Combobox.Options className="rounded-md ring-black absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredCities.length === 0 && query !== '' ? (
                        <div className="text-gray-700 relative cursor-default select-none py-2 px-4 text-lg">
                            Nothing found.
                        </div>
                    ) : (
                        filteredCities.map((city) => (
                            <Combobox.Option
                                key={city.id}
                                className="relative py-2 pl-10 pr-4 text-lg"
                                value={city}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? 'font-medium text-accent'
                                                    : 'font-normal'
                                            }`}
                                        >
                                            {city.name}
                                        </span>
                                    </>
                                )}
                            </Combobox.Option>
                        ))
                    )}
                </Combobox.Options>
            </Combobox>
        </div>
    )
}

export default WtAutoComplete

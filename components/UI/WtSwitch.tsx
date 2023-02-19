import { Switch } from '@headlessui/react'
import type { FC } from 'react'
import React from 'react'

type SwitchProps = {
    value: boolean
    setValue: (e: boolean) => void
}
const WtSwitch: FC<SwitchProps> = ({ value, setValue }) => {
    return (
        <div className="">
            <Switch
                checked={value}
                onChange={(e) => setValue(e)}
                className={`${value ? 'bg-[#FCDC9D]' : 'bg-white'}
          relative inline-flex h-[19px] w-[72px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${
                        value
                            ? 'translate-x-12 bg-accent'
                            : '-translate-x-2 bg-grey-300'
                    }
            pointer-events-none inline-block h-[28px] w-[28px] rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}

export default WtSwitch

import './WtRange.css'

import type { FC, HTMLProps } from 'react'
import React from 'react'
import ReactSlider from 'react-slider'

export type TRageState = {
    index: number
    value: number | number[]
    valueNow?: number
}

type RangeProps = {
    value?: undefined | number[]
    onBeforeRange?: () => void
    onAfterChange?: () => void
    onChange?: () => void
    className?: string
}
const WtRangeTime: FC<RangeProps> = ({ value = [0, 24], className }) => {
    const min = new Date(2013, 6, 13, 0).getTime()
    const max = new Date(2013, 6, 13, 24).getTime()
    const formattedValue = [
        new Date(2013, 6, 13, value[0]).getTime(),
        new Date(2013, 6, 13, value[1]).getTime(),
    ]
    const Track = (props: HTMLProps<HTMLDivElement>, state: TRageState) => {
        return (
            <div
                {...props}
                className={`wt-slider__track ${
                    state.index === 1
                        ? 'bg-accent'
                        : 'border-[1px] border-white'
                }`}
            />
        )
    }
    const Thumb = (props: HTMLProps<HTMLDivElement>, state: TRageState) => {
        const custom = {
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
        }
        return (
            <div
                className="wt-slider__thumb h-[25px] w-[25px] bg-white"
                {...props}
            >
                <span className="absolute top-[30px] text-grey-200">
                    {new Date(state.valueNow).toLocaleTimeString(
                        'ru-RU',
                        custom
                    )}
                </span>
            </div>
        )
    }

    return (
        <div className="relative">
            <div className="mb-2 flex justify-between">
                <span className="text-white">от</span>
                <span className="text-white">до</span>
            </div>
            <ReactSlider
                className={`wt-slider border-1 relative h-[19px] w-full rounded-full border-white ${className}`}
                thumbClassName="wt-slider__thumb"
                trackClassName="wt-slider__track"
                defaultValue={formattedValue}
                renderThumb={(props, state: TRageState) => Thumb(props, state)}
                renderTrack={(props, state: TRageState) => Track(props, state)}
                pearling
                step={3600000}
                min={min}
                max={max}
                minDistance={10}
                onAfterChange={(e) => console.log(e)}
            />
        </div>
    )
}

export default WtRangeTime

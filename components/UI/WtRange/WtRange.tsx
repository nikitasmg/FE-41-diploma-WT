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
    value: number | undefined | number[]
    min: number
    max: number
    onBeforeRange?: () => void
    onAfterChange?: () => void
    onChange?: () => void
    className?: string
}
const WtRange: FC<RangeProps> = ({
    value = [0, 1000],
    max = 1000,
    min = 0,
    className,
}) => {
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
        return (
            <div
                className="wt-slider__thumb h-[25px] w-[25px] bg-white"
                {...props}
            >
                <span className="absolute top-[30px] text-grey-200">
                    {state.valueNow}
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
                defaultValue={value}
                renderThumb={(props, state: TRageState) => Thumb(props, state)}
                renderTrack={(props, state: TRageState) => Track(props, state)}
                pearling
                min={min}
                max={max}
                minDistance={10}
                onAfterChange={(e) => console.log(e)}
            />
        </div>
    )
}

export default WtRange

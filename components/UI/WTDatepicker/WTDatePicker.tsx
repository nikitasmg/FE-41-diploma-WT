'use client'

import 'react-datepicker/dist/react-datepicker.css'

import ru from 'date-fns/locale/ru'
import type { FC } from 'react'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import WTInput from '../WtInput/WTInput'
import './WTDatepicker.css'

type DatePickerProps = {
    value: Date | null
    onChange: (data: Date) => void
}
registerLocale('ru', ru)

export const WTDatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <DatePicker
                locale="ru"
                calendarClassName="wt-data-picker"
                selected={value}
                minDate={new Date()}
                onChange={(date: Date) => onChange(date)}
                placeholderText={'ДД/ММ/ГГ'}
                customInput={<WTInput icon="date" full />}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    )
}

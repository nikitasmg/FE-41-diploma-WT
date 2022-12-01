'use client'

import 'react-datepicker/dist/react-datepicker.css'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import s from './WTDatepicker.module.css'

// type DatePickerProps = {
//     props: React.ComponentPropsWithoutRef<'input'>
// }

export const WTDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <DatePicker
            calendarClassName={s.datepicker}
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
        />
    )
}

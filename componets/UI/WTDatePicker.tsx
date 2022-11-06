'use client'

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const WTDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker calendarClassName={'customDatePicker'} selected={startDate} onChange={(date:Date) => setStartDate(date)} />
    );
};
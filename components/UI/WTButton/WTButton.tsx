'use client'

import type { FC } from 'react'
import React from 'react'

import s from './WTButton.module.css'

type ButtonProps = {
    children: React.ReactNode
    outlined?: boolean
    size?: 's' | 'm' | 'xl'
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
    type?: 'button' | 'submit' | 'reset' | undefined
}

const WtButton: FC<ButtonProps> = ({
    children,
    outlined = false,
    onClick,
    className = '',
    type,
}) => {
    return (
        <button
            type={type}
            className={`${s.button} ${
                outlined && s.outlined
            } ${className} active-border-accent active:border active:bg-transparent active:text-accent`}
            onClick={(evt) => onClick && onClick(evt)}
        >
            {children}
        </button>
    )
}

export default WtButton

'use client'
import React from 'react'

const Tagline = ({ text, className }) => {
    return (
        <span
            className={`text-3xl font-bold text-black/30 md:text-5xl md:leading-[5rem] ${className}`}
        >
            {text}
        </span>
    )
}

export default Tagline

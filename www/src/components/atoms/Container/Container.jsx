'use client'
import React from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const container = cva(['relative', 'mx-auto'], {
    variants: {
        maxWidth: {
            sm: [],
            md: ['lg:max-w-5xl'],
            lg: ['lg:max-w-6xl'],
            xl: [],
        },
        fluid: {
            true: ['w-full '],
            false: ['container px-4 xl:max-w-7xl'],
        },
    },
    defaultVariants: {
        maxWidth: '',
        fluid: false,
    },
})

const Container = ({ className, maxWidth, fluid, ...props }) => (
    <div
        className={twMerge(container({ maxWidth, className, fluid }))}
        {...props}
    />
)

export default Container

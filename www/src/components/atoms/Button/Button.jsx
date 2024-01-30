'use client'

import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const button = cva(
    [
        'flex',
        'items-center',
        'justify-center',
        'font-normal',
        'transition-all',
        'group',
    ],
    {
        variants: {
            intent: {
                contained: ['bg-current'],
                primary: [`bg-primary text-white`],
                secondary: [`bg-secondary text-black`],

                // text: ['text-base'],
                // contained: (props) => {
                //     const { color } = props
                //     console.log(color)
                //     return [
                //         ` bg-red-500 font-semibold text-center shadow-lg shadow-primary/30 transition-all hover:shadow-none `,
                //         color && `bg-${color} hover:bg-${color}-darken`,
                //     ]
                // },
            },
            color: {
                primary: ['bg-primary', 'text-white'],
            },
            size: {
                sm: [`text-sm font-semibold p-2 px-5 rounded-2xl`],
                md: [`text-base p-3 px-10 rounded-2xl`],
                lg: [`text-lg py-3 px-20 rounded-2xl`],
                xl: [`text-6xl`],
            },
        },
        defaultVariants: {
            intent: 'contained',
            size: 'md',
            color: 'primary',
        },
    }
)

const Button = ({
    children,
    className,
    intent,
    color,
    size,
    icon,

    ...props
}) => (
    <button
        {...props}
        className={twMerge(
            button({
                intent,
                color,
                size,
                icon,
            })
        )}
    >
        {children}
    </button>
)

export default Button

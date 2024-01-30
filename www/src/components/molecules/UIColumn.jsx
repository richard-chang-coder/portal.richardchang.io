'use client'
import { Container } from '../atoms'
import React from 'react'
import { usePathname } from 'next/navigation'

const UIColumn = ({ children }) => {
    const pathname = usePathname()

    return (
        <>
            {pathname === '/' && (
                <div className="fixed left-0 top-0">
                    <Container>
                        <div className="flex h-screen w-full flex-row gap-52 opacity-5">
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                            <div className="h-full w-[1px] bg-black "></div>
                        </div>
                    </Container>
                </div>
            )}

            {children}
        </>
    )
}

export default UIColumn

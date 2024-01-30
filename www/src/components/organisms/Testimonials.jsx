'use client'
import React from 'react'

import { Section, Container } from '@/components/atoms'
import { Heading } from '../molecules/Index'
import Link from 'next/link'

const Testimonials = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-between">
                        <Heading
                            heading={`Forming lasting partnerships`}
                            tagline={`Testimonials.`}
                        />
                        <Link href="#">View Projects</Link>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col gap-10 rounded-2xl border-[1px]  p-10">
                            <p className="text-lg leading-relaxed">
                                "We enlisted the services of Richard Chang to
                                rejuvenate our website, and the result has been
                                nothing short of phenomenal. Richard displayed a
                                high level of responsiveness and collaboration
                                throughout the project. He worked meticulously
                                with us to create various design iterations,
                                offering valuable suggestions while remaining
                                flexible to our specific requirements..."
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                                <h5 className="text-sm uppercase">
                                    <strong>Eugene</strong> -{' '}
                                    <span className="text-black/50">
                                        Project Manger
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10  rounded-2xl border-[1px] bg-white p-10 shadow-2xl">
                            <p className="text-lg leading-relaxed">
                                "We enlisted the services of Richard Chang to
                                rejuvenate our website, and the result has been
                                nothing short of phenomenal. Richard displayed a
                                high level of responsiveness and collaboration
                                throughout the project. He worked meticulously
                                with us to create various design iterations,
                                offering valuable suggestions while remaining
                                flexible to our specific requirements..."
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                                <h5 className="text-sm uppercase">
                                    <strong>Eugene</strong> -{' '}
                                    <span className="text-black/50">
                                        Project Manger
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Testimonials

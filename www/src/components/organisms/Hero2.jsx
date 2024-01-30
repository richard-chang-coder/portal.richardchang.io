'use client'
import React from 'react'
import Image from 'next/image'

import { Section, Container, Button } from '@/components/atoms'

const Hero2 = () => {
    return (
        <Section className="bg-background py-0 dark:bg-black">
            <Container>
                <div className="mx-auto flex flex-col items-center md:flex-row lg:h-[100vh]">
                    <div className="mb-16 flex flex-col items-center text-center  md:mb-0 md:w-3/4 md:items-start md:pr-16 md:text-left lg:pr-24">
                        <div className="mb-16 flex flex-col gap-5">
                            <h1 className="bg-clip-text font-black uppercase text-black dark:bg-gradient-to-r dark:to-secondary-darken dark:text-primary-lighten dark:text-transparent">
                                Craving a modern website?
                            </h1>
                            {/* <h6 className="text-black font-semibold dark:text-primary-lighten lg:text-[1.63rem]">
                                👋 Hi, my name is Richard Chang a{' '}
                                <strong className="px-3 bg-primary/20">
                                    Full Stack Developer
                                </strong>
                            </h6> */}
                            <p className="text-black dark:text-primary-lighten ">
                                Embark on a digital revolution. I design and
                                develop modern, sleek websites that set your
                                vision apart in the online realm. Let's craft
                                your unique online identity.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-3">
                            <Button size="lg">Let's Get Started.</Button>
                            <div className="mb-6 flex items-center justify-center text-[0.85rem] ">
                                <div className="mr-3 h-3 w-3 rounded-full bg-lime-600"></div>
                                <div className="text-black">
                                    2/5 spots remaning for September
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <div className="w-full rounded-full border-4 border-primary-lighten ">
                            <Image
                                src={'/avatar.png'}
                                alt="Richard Chang"
                                width={200}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Hero2

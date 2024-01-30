'use client'
import React from 'react'
import Image from 'next/image'

import { Section, Container, Button } from '@/components/atoms'

const Hero = () => {
    return (
        <Section className="pt-0 dark:bg-black">
            <Container>
                <div className="mx-auto flex flex-col items-center md:flex-row lg:h-[100vh]">
                    <div className="mb-16 flex flex-col items-center text-center  md:mb-0 md:w-3/4 md:items-start md:pr-16 md:text-left lg:pr-24">
                        <div className="mb-10 flex flex-col gap-5">
                            <h6 className="font-normal text-primary dark:text-primary-lighten lg:text-[1.63rem]">
                                👋 Hi, my name is Richard Chang a{' '}
                                <strong>Full Stack Developer</strong>
                            </h6>
                            <h1 className="bg-gradient-to-r from-[#A187EB] to-secondary-darken bg-clip-text font-black uppercase text-transparent dark:text-primary-lighten">
                                Ready to Elevate Your Online Presence?
                            </h1>
                        </div>

                        <div className="flex justify-center gap-5">
                            <Button variant={'outline'} size="lg">
                                My Portfolio
                            </Button>
                            <Button size="lg">Let's Get Started.</Button>
                        </div>
                    </div>
                    <div className="flex-1 bg-secondary">
                        <div className="h-[500px] w-full rounded-full border-4 border-primary-lighten">
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

export default Hero

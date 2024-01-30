'use client'

import React from 'react'

import { Section, Container } from '@/components/atoms'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectDetail = () => {
    return (
        <main>
            <div className="w-full bg-white py-20 text-black lg:pb-20 lg:pt-40">
                <Container>
                    <div className="flex h-[20vh] flex-col justify-end gap-5 lg:h-[45vh]">
                        {/* <h1 className="text-inherit">Berichinlove</h1> */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                            animate={{ opacity: 1, y: 0 }} // Animate to this state (visible)
                            transition={{ duration: 0.3, ease: 'easeInOut' }} // Animation duration
                            className="text-inherit"
                        >
                            Berichinlove
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                            animate={{ opacity: 1, y: 0 }} // Animate to this state (visible)
                            transition={{
                                duration: 0.3,
                                delay: 0.1,
                                ease: 'easeInOut',
                            }} // Animation duration with delay
                            className="text-2xl"
                        >
                            A Single Page Wedding RSVP Page
                        </motion.p>
                    </div>
                </Container>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                animate={{ opacity: 1, y: 0 }} // Animate to this state (visible)
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                    ease: 'easeInOut',
                }} // Animation duration with delay
                className="mb-20 lg:mb-32"
            >
                <Image
                    className="w-full bg-green-800"
                    src="/clients/berichinlove/main.png"
                    width={1040}
                    height={300}
                    rel="Image"
                />
            </motion.div>

            <Section>
                <Container>
                    <div className="flex flex-row gap-10">
                        <p className="w-3/5">
                            BeRichinlove was designed and develoed by yours
                            truly. This one page Wedding site was meant to be a
                            one stop shop for guests to find out more details
                            about the wedding day and a way to RSVP. The content
                            was personalized based on the guests' personal code
                            that was given through a personalized digital
                            invitation.
                        </p>
                        <div className="flex flex-1 justify-center">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <h4 className="mb-2">Deliverables</h4>
                                    <ul className="flex flex-col gap-3 text-base">
                                        <li>Design</li>
                                        <li>Website</li>
                                        <li>Content</li>
                                    </ul>
                                </div>
                                <div>
                                    <Link
                                        href="#"
                                        className="text-base underline"
                                    >
                                        Berichinlove.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Image
                        className="w-full"
                        src="/clients/viva-naturals/image-1.png"
                        width={1400}
                        height={200}
                    ></Image>
                </Container>
            </Section>
        </main>
    )
}

export default ProjectDetail

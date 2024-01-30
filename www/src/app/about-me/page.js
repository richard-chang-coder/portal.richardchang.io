'use client'

import React, { useMemo } from 'react'

import { Section, Container, Divider, Badge } from '@/components/atoms'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heading } from '@/components/molecules/Index'
import Link from 'next/link'
import portfolioList from './../../app/portfolioList.json'
import {
    CTA,
    AboutMe,
    ServicesList,
    MyRecognition,
    ContactMe,
} from '@/components/organisms'
import { useRouter } from 'next/navigation'

const coreValues = [
    {
        icon: '🤝',
        headline: 'Collaborative Triumphs',
        description:
            'Turn team aspirations into shared victories and virtual celebrations.',
    },
    {
        icon: '⏰',
        headline: 'Deadline Maestro',
        description:
            'Meet timelines with precision, and dance through flexible schedules with seamless efficiency.',
    },
    {
        icon: '🚀',
        headline: 'Strive for the summit.',
        description:
            'Chase excellence persistently, acknowledging perfection is rare.',
    },
]

const AboutMePage = () => {
    const router = useRouter()

    const spotlight = useMemo(() => {
        return portfolioList[0]
    }, [portfolioList])

    return (
        <main>
            <div className="w-full bg-white py-20 text-black lg:pb-20 lg:pt-40">
                <Container fluid>
                    <Section>
                        <Container>
                            <div className="flex w-2/3 flex-col justify-center gap-5 ">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                                    animate={{ opacity: 1, y: 0 }} // Animate to this state (visible)
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }} // Animation duration
                                    className="text-inherit"
                                >
                                    Hey,
                                    <br /> I’m Richard
                                </motion.h1>
                            </div>
                        </Container>
                    </Section>
                    <Section>
                        <Container>
                            <div className="overflow-hidden rounded-3xl bg-primary ">
                                <Image
                                    className="aboslute h-full w-full object-cover"
                                    src="/about-us_hero.jpg"
                                    width={1200}
                                    height={1200}
                                    alt="Richard Change Web Developer"
                                />
                            </div>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <div>
                                <blockquote className="text-3xl">
                                    I’ am a web designer who’ve collaborated
                                    with diverse business, both startups and
                                    established corporations, creating impactful
                                    designs but most important focusing on
                                    fostering relationships & work culture
                                    deliver world-class digital products.
                                </blockquote>
                            </div>
                        </Container>
                    </Section>
                    <Divider />
                    <Section className="!p-0">
                        <Container>
                            <div className="grid grid-cols-2 gap-5 ">
                                <div className="flex flex-col gap-5 py-10 lg:py-28">
                                    <Heading
                                        tagline={`Core values.`}
                                        heading={`How I work.`}
                                    />
                                </div>
                                <div className="px-10 py-16 pr-5 lg:py-28">
                                    <ul className="flex flex-col gap-10">
                                        {coreValues.map((value, idx) => (
                                            <li className="flex gap-5">
                                                <div className="mt-2 h-[100px] grow bg-red-300 ">
                                                    {value.icon}
                                                </div>
                                                <div className="flex w-3/4 flex-col">
                                                    <h5 className="font-semibold capitalize">
                                                        {value.headline}
                                                    </h5>
                                                    <p>{value.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </Section>
                    <Divider />
                    <ServicesList heading="What I can do" tagline="My Resume" />
                    <MyRecognition />
                </Container>
            </div>

            <CTA />
        </main>
    )
}

export default AboutMePage

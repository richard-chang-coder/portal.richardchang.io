'use client'

import React, { useMemo } from 'react'

import { Section, Container, Divider, Badge } from '@/components/atoms'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heading, ProjectCard } from '@/components/molecules/Index'
import Link from 'next/link'
import portfolioList from './../../app/portfolioList.json'
import { CTA, ContactMe, ServicesList } from '@/components/organisms'
import { useRouter } from 'next/navigation'

const process = [
    {
        title: 'discovery',
        desription:
            'During the discovery phase, we delve into client goals, conduct market research to analyze trends, and deeply understand user needs.',
    },
    {
        title: 'desgin',
        desription:
            'In the design phase, we create wireframes and prototypes, iteratively crafting visually appealing UI/UX designs that align with project goals.',
    },
    {
        title: 'develop',
        desription:
            'The development phase involves coding both front-end and back-end components, integrating CMS platforms, and executing rigorous testing for functionality and performance.',
    },
    {
        title: 'launch',
        desription:
            'As we approach launch, we deploy the project, conduct final testing to ensure everything works seamlessly, provide client walkthrough, and execute a strategic launch plan.',
    },
]

const Services = () => {
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
                                {/* <h1 className="text-inherit">Berichinlove</h1> */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
                                    animate={{ opacity: 1, y: 0 }} // Animate to this state (visible)
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }} // Animation duration
                                    className="text-inherit"
                                >
                                    We’ll work together every step of the way
                                </motion.h1>
                            </div>
                        </Container>
                    </Section>
                    <Divider />
                    <ServicesList
                        tagline={'My services.'}
                        heading={`The list`}
                    />
                    <Section className="lg:pt-0">
                        <Container className="mb-20">
                            <Heading
                                tagline={'Process.'}
                                heading={`Four Simple Step`}
                            />
                        </Container>
                        <Divider />
                        <Container>
                            <ol>
                                {process.map((step, idx) => (
                                    <li className="flex border-b-[1px] py-10 last:border-0">
                                        <h3 className="w-1/4 font-semibold capitalize">
                                            {idx + 1}. {step.title}
                                        </h3>
                                        <div className="w-2/3">
                                            {step.desription}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </Container>
                    </Section>

                    <ContactMe />
                </Container>
            </div>

            <CTA />
        </main>
    )
}

export default Services

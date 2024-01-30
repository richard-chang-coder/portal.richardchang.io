'use client'

import React, { useMemo } from 'react'

import { Section, Container, Divider, Badge } from '@/components/atoms'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heading, ProjectCard } from '@/components/molecules/Index'
import Link from 'next/link'
import portfolioList from './../../app/portfolioList.json'
import { CTA } from '@/components/organisms'
import { useRouter } from 'next/navigation'

const Projects = () => {
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
                            <div className="flex flex-col justify-center gap-5 ">
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
                                    Projects
                                </motion.h1>
                            </div>
                        </Container>
                    </Section>
                    <Divider />
                    <Section>
                        <Container>
                            <div className="flex flex-col gap-20">
                                <div className="flex items-end justify-between">
                                    <Heading
                                        tagline={spotlight.client}
                                        heading={spotlight.blurb}
                                    />
                                    <Link href="#" className="pr-5">
                                        View Project
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <Image
                                        className="w-full bg-green-800"
                                        src={spotlight.image_main.src}
                                        width={1040}
                                        height={200}
                                        alt={spotlight.client}
                                    />
                                </div>
                            </div>
                        </Container>
                    </Section>
                    <Section className="flex flex-col ">
                        {portfolioList.map((project, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer transition-colors hover:bg-gray-100"
                                onClick={() => router.push('/projects/1')}
                            >
                                <Container className="py-10">
                                    <ProjectCard project={project} />
                                </Container>
                                <Divider className="p-0" />
                            </div>
                        ))}
                    </Section>
                </Container>
            </div>
            <CTA />
        </main>
    )
}

export default Projects

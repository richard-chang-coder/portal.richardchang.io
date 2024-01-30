'use client'
import React from 'react'
import { Section, Container, Button } from '@/components/atoms'
import Heading from '@/components/molecules/Heading'

const AboutMe = () => {
    return (
        <Section>
            <Container>
                <div className="grid grid-cols-2 gap-5">
                    <Heading size="7xl" heading={`Hey, <br /> I’m Richard`} />
                    <div className="flex-1">
                        <p className="lg:pt-[7rem]">
                            I’ am a web designer who’ve collaborated with
                            diverse business, both startups and established
                            corporations, creating impactful designs but most
                            important focusing on fostering relationships & work
                            culture deliver world-class digital products.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default AboutMe

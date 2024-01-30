'use client'
import React from 'react'
import { Section, Container, Button, Divider } from '@/components/atoms'
import { Heading } from '../molecules/Index'

const CTA = () => {
    return (
        <Section className="bg-black text-white ">
            <Container>
                <div className="flex w-full flex-col gap-10 md:w-2/3 ">
                    <div className="flex flex-col gap-5">
                        {/* <Heading heading={`Let’s create great things.`} /> */}
                        <h2 className="text-8xl capitalize leading-tight">
                            Let’s create great things.
                        </h2>
                        <p>
                            Currently offering a <strong>free</strong> initial
                            consultation. Want to talk about your website
                            project? Get in touch with me and see if we are a
                            good fit.
                        </p>
                    </div>

                    <Button intent={'secondary'} className="mt-4">
                        Get in Touch
                    </Button>
                </div>
            </Container>
        </Section>
    )
}

export default CTA

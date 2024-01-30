import React from 'react'
import { Section, Container } from '../atoms'
import { Heading } from '../molecules/Index'
import Link from 'next/link'

const MyServices = () => {
    return (
        <Section className="!p-0">
            <Container>
                <div className="grid grid-cols-2 gap-5 ">
                    <div className="border-r py-16 pr-5 lg:py-28">Image</div>
                    <div className="flex flex-col gap-5 px-10 py-10 lg:py-28">
                        <Heading
                            tagline={`My services.`}
                            heading={`Design-led digital products`}
                        />

                        <p>
                            Crafting an outstanding digital experience starts
                            with thorough research and iterative experimentation
                            for data-driven decisions. I specialize in website
                            development, utilizing tools like Webflow and
                            creating tailored solutions, including web
                            applications.
                        </p>

                        <Link href="#" className="mt-5">
                            Go to services{' '}
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default MyServices

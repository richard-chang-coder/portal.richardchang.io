'use client'
import React from 'react'

import { Section, Container, Icon } from '@/components/atoms'
import Image from 'next/image'
import { Heading } from '../molecules/Index'

const servicesData = [
    {
        headline: 'Cutting-Edge Technology',
        description:
            'I harness the power of cutting-edge technology to create innovative, forward-thinking solutions. Your projects will benefit from the latest advancements, ensuring they stay at the forefront of industry trends.',
        icon: 'desktop_gear',
    },
    {
        headline: 'Custom Solutions',
        description:
            'Every project is unique, and I tailor my solutions to meet your specific needs. No one-size-fits-all approaches here. Expect personalized, custom solutions that address your challenges precisely.',
        icon: 'puzzel',
    },
    {
        headline: ' Expertise and Dedication',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
]

const Services = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-32">
                    <div className="m-auto max-w-4xl rounded-xl  text-center">
                        <Heading
                            heading={`Empowering Your Vision: My Developer Mission`}
                            tagline={`Your Project, My Passion`}
                        />
                    </div>

                    <div>
                        <div className="flex flex-row gap-10 ">
                            <div className="w-2/5">
                                <ul className="flex flex-col gap-20">
                                    {servicesData.map((service, idx) => (
                                        <li
                                            key={idx}
                                            className="flex flex-col items-start gap-2 lg:gap-5"
                                        >
                                            <div className="flex flex-col lg:gap-2">
                                                <Icon
                                                    icon={service.icon}
                                                    size={40}
                                                />
                                                <h4 className="font-semibold">
                                                    {service.headline}
                                                </h4>
                                            </div>

                                            <p>{service.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="h-[50vh] flex-1 rounded-3xl">
                                <Image
                                    src="/service-provided.png"
                                    width={1024}
                                    height={300}
                                    alt="process"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Services

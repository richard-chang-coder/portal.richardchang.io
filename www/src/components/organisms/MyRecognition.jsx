import React from 'react'
import { Section, Container } from '@/components/atoms'
import { Heading } from '@/components/molecules/Index'
import Link from 'next/link'

const recognitions = [
    {
        icon: '',
        platform: 'Platform',
        description: 'Description',
        type: 'certificate', //certificate or websites
        item: {
            label: 'Website',
            buttonLabel: 'View Project',
            buttonUrl: '#',
            buttonRel: '',
        },
    },
    {
        icon: '',
        platform: 'Platform2',
        description: 'Description',
        type: 'certificate', //certificate or websites
        item: {
            label: '',
            buttonLabel: 'View certificate',
            buttonUrl: '#',
            buttonRel: '',
        },
    },
]
const MyRecognition = ({
    tagline = 'Recognition.',
    heading = 'Some small achievements',
}) => {
    return (
        <Section className="!p-0">
            <Container>
                <Heading tagline={tagline} heading={heading} />
            </Container>
            <Container fluid>
                <ul className="pt-8 lg:pt-14">
                    {recognitions.map((recognition, idx) => (
                        <li key={idx} className="border-t-[1px] py-5">
                            <div className="container m-auto flex items-center justify-between px-4 xl:max-w-7xl">
                                <div>
                                    <h6 className="font-semibold">
                                        {recognition.platform}
                                    </h6>
                                    <p className="text-sm">
                                        {recognition.description}
                                    </p>
                                </div>
                                <div className="text-xl">
                                    {recognition.item.label}
                                </div>
                                <Link
                                    href={recognition.item.buttonUrl}
                                    rel={recognition.item.buttonRel}
                                >
                                    {recognition.item.buttonLabel} {'>'}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}

export default MyRecognition

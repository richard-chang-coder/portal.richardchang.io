import React from 'react'
import { Section, Container, Divider } from '@/components/atoms'
import { Heading } from '../molecules/Index'

const developmentSkills = [
    {
        label: 'front-end',
        skills: ['react', 'next.js', 'bootstrap', 'material design'],
    },
    {
        label: 'CMS',
        skills: ['webflow', 'shopify', 'wix', 'square space'],
    },
]

const designSkills = [
    {
        label: 'interface',
        skills: ['Interaction Design', 'Design Systems'],
    },
]

const ServicesList = ({ heading, tagline }) => {
    return (
        <Section>
            <Container className="mb-20">
                <Heading tagline={tagline} heading={heading} />
            </Container>
            <Divider />
            <Container>
                <div className="flex flex-row gap-20 ">
                    <div className="flex-1 border-r pr-5 lg:py-20 ">
                        <h4 className="mb-10 font-bold ">Design</h4>
                        {designSkills.map((design, idx) => (
                            <div key={idx} className="mb-10 capitalize">
                                <p className="mb-4 font-semibold">
                                    {design.label}
                                </p>
                                <ul className="flex flex-col gap-4">
                                    {design?.skills.map((skill, idx) => (
                                        <li key={idx}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 gap-5 lg:py-20">
                        <h4 className="mb-10 font-bold ">Development</h4>
                        {developmentSkills.map((design, idx) => (
                            <div key={idx} className="mb-10 capitalize">
                                <p className="mb-4 font-semibold">
                                    {design.label}
                                </p>
                                <ul className="flex flex-col gap-4">
                                    {design?.skills.map((skill, idx) => (
                                        <li key={idx}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <Divider />
        </Section>
    )
}

export default ServicesList

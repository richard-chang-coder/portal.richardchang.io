'use client'
import React from 'react'
import { Section, Container } from '@/components/atoms'
import { Heading, PortfolioCard } from '../molecules/Index'

import portfolioList from './../../app/portfolioList.json'

const Portfolio = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-8">
                    <div>
                        <Heading
                            heading={`Other Works I've done`}
                            tagline={`Case Studies`}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-10 xl:grid-cols-3">
                        {portfolioList.map((portfolio, idx) => (
                            <PortfolioCard key={idx} data={portfolio} />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Portfolio

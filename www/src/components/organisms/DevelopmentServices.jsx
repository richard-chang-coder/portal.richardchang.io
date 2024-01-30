'use client'
import React from 'react'
import { Section, Container, Button, Icon, Tagline } from '@/components/atoms'

const CardStyle = ({ children }) => {
    return (
        <div className="flex cursor-pointer flex-col gap-10 rounded-lg border-[1px] border-border bg-white p-10 shadow-2xl transition-all ">
            {children}
        </div>
    )
}

const DevelopementServices = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-2 xl:flex-row">
                    <div className="flex w-2/6 flex-col gap-5 ">
                        <div>
                            <Tagline text="Services" />
                            <h2>Let's Build Something Awesome Together !</h2>
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-1 gap-5 bg-white md:grid-cols-2">
                        <CardStyle>
                            <div className="flex flex-col gap-3">
                                <Icon icon={'web-design'} size={50} />
                                <h4 className="font-semibold">
                                    Website and App Design
                                </h4>
                                <p>
                                    Craft captivating and user-centric designs
                                    for both websites and mobile applications,
                                    optimizing user experience and brand
                                    identity.
                                </p>
                            </div>

                            <ul className="text-base ">
                                {[
                                    'Website Design',
                                    'UI/UX Design',
                                    'UX Audit',
                                    'Mobile App Design',
                                    'Design Systems',
                                ].map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center justify-start gap-2"
                                    >
                                        <div className="h-[3px] w-5 bg-border"></div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                            <Button color={'black'}>Get A Quote</Button>
                        </CardStyle>
                        <CardStyle>
                            <div className="flex flex-col gap-3">
                                <Icon icon={'web-development'} size={50} />
                                <h4 className="font-semibold">
                                    Custom Web Development
                                </h4>
                                <p>
                                    Build cutting-edge websites and optimize
                                    online stores, leveraging platforms like
                                    Webflow and Shopify, to drive engagement and
                                    growth for businesses.
                                </p>
                            </div>
                            <ul className="text-base">
                                {[
                                    'Webflow Development',
                                    'Shopify Development',
                                    'Custom Web Development',
                                    'Conversion Rate Optimization',
                                    'SEO Strategy',
                                ].map((detail, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center justify-start gap-2"
                                    >
                                        <div className="h-[3px] w-5 bg-border"></div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                            <Button color={'black'}>Get A Quote</Button>
                        </CardStyle>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default DevelopementServices

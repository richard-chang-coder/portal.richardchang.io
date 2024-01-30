'use client'
import { useState } from 'react'
import { Section, Container } from '../atoms'
import {
    Accordion,
    Heading,
    IndustryImage,
    ReviewBubble,
} from '../molecules/Index'
import Link from 'next/link'

const items = [
    {
        label: 'Real Estate',
        description:
            "I've worked with amazing business , from Startups to some big companies crafting amazing desgins that made business impacts. My focus lies in UI, UX, Web Design and Frontend Development. No matter the industry, I’d love to talk with you and see how we could creating something awesome!",

        tags: [
            'Lead generation',
            'Mortgage Calculator Site',
            'Real Estate Listings',
            'Forms',
        ],
        project: {
            _id: 1,
            start_date: 2002,
            end_date: 2023,
            client: 'Blue-Mark',
            description:
                "BeRichinlove was designed and develoed by yours truly. This one page Wedding site was meant to be a one stop shop for guests to find out more details about the wedding day and a way to RSVP. The content was personalized based on the guests' personal code that was given through a personalized digital invitation.",
            blurb: 'Single page wedding website',
            image_fallback: {
                src: '/clients/berichinlove/main.png',
                alt: '',
                sizes: {
                    width: null,
                    height: null,
                },
            },
            review: {
                link: '',
                text: '"We enlisted the services of Richard Chang to rejuvenate our website, and the result has been nothing short of phenomenal. Richard displayed a high level of responsiveness and collaboration throughout the project. He worked meticulously with us to create various design iterations, offering valuable suggestions while remaining flexible to our specific requirements...',
            },
        },
    },
    {
        label: 'E-commerce',
        description:
            "I've worked with amazing business , from Startups to some big companies crafting amazing desgins that made business impacts. My focus lies in UI, UX, Web Design and Frontend Development. No matter the industry, I’d love to talk with you and see how we could creating something awesome!",
        tags: ['Online Store ', 'Marketplace'],
        project: {
            _id: 1,
            start_date: 2002,
            end_date: 2023,
            client: 'Blue-Mark',
            description:
                "BeRichinlove was designed and develoed by yours truly. This one page Wedding site was meant to be a one stop shop for guests to find out more details about the wedding day and a way to RSVP. The content was personalized based on the guests' personal code that was given through a personalized digital invitation.",
            blurb: 'Single page wedding website',
            image_fallback: {
                src: '/clients/berichinlove/main.png',
                alt: '',
                sizes: {
                    width: null,
                    height: null,
                },
            },
            review: {
                link: '',
                text: '"We enlisted the services of Richard Chang to rejuvenate our website, and the result has been nothing short of phenomenal. Richard displayed a high level of responsiveness and collaboration throughout the project. He worked meticulously with us to create various design iterations, offering valuable suggestions while remaining flexible to our specific requirements...',
            },
        },
    },
    {
        label: 'Wedding',
        description:
            "I've worked with amazing business , from Startups to some big companies crafting amazing desgins that made business impacts. My focus lies in UI, UX, Web Design and Frontend Development. No matter the industry, I’d love to talk with you and see how we could creating something awesome!",
        tags: ['Wedding Registry', 'RSVP and Guest Management'],
        project: {
            _id: 1,
            start_date: 2002,
            end_date: 2023,
            client: 'Blue-Mark',
            description:
                "BeRichinlove was designed and develoed by yours truly. This one page Wedding site was meant to be a one stop shop for guests to find out more details about the wedding day and a way to RSVP. The content was personalized based on the guests' personal code that was given through a personalized digital invitation.",
            blurb: 'Single page wedding website',
            image_fallback: {
                src: '/clients/berichinlove/main.png',
                alt: '',
                sizes: {
                    width: null,
                    height: null,
                },
            },
            review: {
                link: '',
                text: '"We enlisted the services of Richard Chang to rejuvenate our website, and the result has been nothing short of phenomenal. Richard displayed a high level of responsiveness and collaboration throughout the project. He worked meticulously with us to create various design iterations, offering valuable suggestions while remaining flexible to our specific requirements...',
            },
        },
    },
]

const Industries = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(0)

    const handleToggle = (index) => {
        setSelectedIndustry((prevIndex) => (prevIndex === index ? null : index))
    }
    return (
        <Section>
            <Container>
                <Heading
                    heading={`Tailored solutions`}
                    tagline={`Industries.`}
                />
                <div className="mt-20 flex gap-10">
                    <div className="flex w-1/2 flex-col gap-20 pr-20">
                        <Accordion
                            selected={selectedIndustry}
                            onClick={handleToggle}
                            items={items}
                        />
                        <Link href={''}>More industries </Link>
                    </div>
                    <div className="-mr-10 flex-1">
                        <div className="-pb-10 relative h-full rounded-3xl bg-red-50 pl-10 pt-10">
                            <ReviewBubble
                                src={selectedIndustry}
                                className="absolute -left-20 bottom-20 z-10"
                            />
                            <IndustryImage src={selectedIndustry} />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Industries

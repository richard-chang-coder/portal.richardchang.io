'use client'
import React from 'react'
import { Section, Container } from '@/components/atoms'
import Image from 'next/image'

const clientsList = [
    {
        name: 'Dynamic Funds',
        url: '',
        image: {
            src: 'logo-dynamic-funds.png',
        },
    },
    {
        name: 'Procom',
        url: '',
        image: {
            src: 'logo-procom.png',
        },
    },
    {
        name: 'Scotiabank',
        url: '',
        image: {
            src: 'logo-scotiabank.png',
        },
    },
    {
        name: 'Viva Naturals',
        url: '',
        image: {
            src: 'logo-viva.png',
        },
    },
    {
        name: 'MELANIE LI YING - Lactation and Mental Health Support',
        url: '',
        image: {
            src: 'logo-melanieliying.png',
        },
    },
    {
        name: 'Blue-Mark',
        url: '',
        image: {
            src: 'logo-blue-mark.png',
        },
    },
    {
        name: 'Canadian Tire',
        url: '',
        image: {
            src: 'logo-canadian-tire.png',
        },
    },
]

const Clients = () => {
    return (
        <Section className="pb-20 pt-0 text-black dark:text-primary-lighten">
            <Container>
                <div className="flex flex-col items-center justify-center gap-8 ">
                    <p className="text-center text-[0.95rem] font-medium opacity-50">
                        Companies I've worked with:
                    </p>
                    <div className="flex w-full items-center justify-evenly gap-16">
                        {clientsList.map((client, idx) => (
                            <div key={idx}>
                                <Image
                                    className="w-32"
                                    src={`/${client.image.src}`}
                                    alt={`${client.name}`}
                                    width={200}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Clients

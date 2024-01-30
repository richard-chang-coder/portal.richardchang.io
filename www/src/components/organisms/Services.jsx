'use client'

import { Container, Icon, Section } from '@/components/atoms'
import { useEffect, useState } from 'react'

const servicesData = [
    {
        id: 1,
        label: 'dashboard',
        description:
            'I harness the power of cutting-edge technology to create innovative, forward-thinking solutions. Your projects will benefit from the latest advancements, ensuring they stay at the forefront of industry trends.',
        icon: 'desktop_gear',
    },
    {
        id: 2,
        label: 'E-Mail',
        description:
            'Every project is unique, and I tailor my solutions to meet your specific needs. No one-size-fits-all approaches here. Expect personalized, custom solutions that address your challenges precisely.',
        icon: 'puzzel',
    },
    {
        id: 3,
        label: 'CMS',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
    {
        id: 4,
        label: 'CMS8',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
    {
        id: 5,
        label: 'CMS1',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
    {
        id: 6,
        label: 'CMS2',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
    {
        id: 7,
        label: 'CMS3',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
    {
        id: 8,
        label: 'CMS4',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
    {
        id: 9,
        label: 'CMS5',
        description:
            'I take a selective approach, ensuring I do not overload with too many clients at once. This way, I can dedicate my full attention and expertise to your project, guaranteeing a high level of quality and commitment."',
        icon: 'certificate',
    },
]

const Services = () => {
    const [selectedService, setSelectedService] = useState('e-mail')
    const [servicesList, setservicesList] = useState(servicesData) // Your initial servicesData

    const handleClick = (label) => {
        const clickedIndex = servicesList.findIndex(
            (service) => service.label === label
        )

        if (clickedIndex !== -1) {
            const shiftedArray = [
                ...servicesList.slice(clickedIndex),
                ...servicesList.slice(0, clickedIndex),
            ]

            setservicesList(shiftedArray)
            setSelectedService(label)
        }
    }

    useEffect(() => {
        const middleIndex = Math.floor(servicesList.length / 2)
        const middleService = servicesList[middleIndex]
        setSelectedService(middleService.label)
    }, [])

    return (
        <Section className={'lg:pt-20'}>
            <Container>
                {/* <div className="max-w-4xl m-auto text-center rounded-xl">
                    <Heading
                        heading={`Empowering Your Vision: My Developer Mission`}
                        tagline={`Your Project, My Passion`}
                    />
                </div> */}
                <div className="flex flex-col gap-32">
                    <div className="flex-col-6 relative m-auto flex justify-center gap-10 px-10 py-5 text-center">
                        {servicesData.map((service, idx) => {
                            const isSelected =
                                service.label.toLocaleLowerCase() ===
                                selectedService.toLocaleLowerCase()

                            return (
                                <button
                                    onClick={handleClick.bind(
                                        this,
                                        service.label
                                    )}
                                    className={`group relative text-primary-darken transition-all ease-in-out hover:-translate-y-1 ${
                                        isSelected &&
                                        '-translate-y-1 text-black'
                                    }`}
                                >
                                    <div
                                        className={`flex items-center justify-center rounded-3xl p-5   ${
                                            isSelected &&
                                            ' bg-black p-6 text-white shadow-xl'
                                        }`}
                                    >
                                        <Icon icon={service.icon} size={40} />
                                    </div>
                                    <div
                                        className={`mt-3 text-xs font-semibold  capitalize ${
                                            isSelected && ' text-black'
                                        }`}
                                    >
                                        {service.label}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                    <div className="bg-red-50">
                        <div>{selectedService}</div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Services

'use client'
import Image from 'next/image'

import { Button, Container, Section } from '@/components/atoms'

const Hero3 = () => {
    return (
        <Section className=" bg-gradient-to-b from-background via-background to-white !py-0 dark:bg-black">
            <Container>
                <div className="mx-auto flex h-[100vh] max-w-6xl flex-col items-center justify-center ">
                    <div className="flex flex-col items-center text-center ">
                        <div className="mb-10 flex flex-col items-center justify-center gap-5 ">
                            <div className="relative flex flex-row justify-center ">
                                <Image
                                    src="/avatar-head.png"
                                    width={100}
                                    height={100}
                                    className="-mb-5"
                                    alt="Richard Chang"
                                />

                                <div className="absolute translate-x-28 rounded-3xl bg-white p-2 px-10 text-sm text-black shadow-2xl dark:text-primary-lighten">
                                    Hi, Im Richard
                                </div>
                            </div>
                            <h1 className="bg-clip-text text-center font-extrabold uppercase text-black dark:bg-gradient-to-r dark:to-secondary-darken dark:text-primary-lighten dark:text-transparent">
                                Discovery. Design. <br />
                                Develop. Launch.
                                {/* expert */}
                            </h1>

                            <p className="max-w-[80%] px-10 text-black dark:text-primary-lighten ">
                                Your website is your online business card. Let’s
                                make it one to remember and convert visitors
                                into leads and sales
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-3">
                            <Button intent="primary" size="lg">
                                Let's Chat!
                            </Button>
                            <div className="mb-6 flex items-center justify-center text-[0.85rem] ">
                                <div className="mr-3 h-3 w-3 rounded-full bg-lime-600"></div>
                                <div className="text-black">
                                    2/5 spots remaning for September
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Hero3

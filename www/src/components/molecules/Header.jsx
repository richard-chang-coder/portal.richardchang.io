'use client'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button, Container } from '../atoms'
const navigation = [
    { name: 'About Me', href: '/about-me' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Me', href: '/#' },
]

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
    const targetRef = useRef(null)
    const logoRef = useRef(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleScroll = () => {
        const scrollY = window.scrollY
        // console.log('Scroll position:', scrollY)

        if (scrollY > 100) {
            gsap.to(targetRef.current, {
                backgroundColor: 'white',
                boxShadow: '0px -2px 50px 4px rgba(128, 121, 178, 0.3)',
                paddingTop: '1.0rem',
                paddingBottom: '1.0rem',
                duration: 0.32,
            })
            gsap.to(logoRef.current, {
                width: '60px',
            })
        } else {
            gsap.to(targetRef.current, {
                backgroundColor: 'transparent',
                boxShadow: 'initial',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                duration: 0.32,
            })
            gsap.to(logoRef.current, {
                width: '90px',
            })
        }
    }

    useEffect(() => {
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll)

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) // The empty dependency array e

    return (
        <header
            ref={targetRef}
            className={` fixed z-20 w-full bg-transparent py-10 transition-all  duration-75
            ease-in-out`}
        >
            <Container>
                <nav
                    className="flex items-center justify-between text-primary "
                    aria-label="Global"
                >
                    <div className="flex text-sm">
                        <a
                            href="/"
                            rel="Richard Chang"
                            className="inline-block w-28 "
                        >
                            <Image
                                ref={logoRef}
                                src={'/logo-text.svg'}
                                width={90}
                                height={90}
                                alt="Richard Chang"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden text-xs font-semibold lg:flex lg:gap-x-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-2 leading-6 text-gray-700 no-underline hover:text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:justify-end">
                        <Button size="sm" color="primary">
                            Let’s Chat
                        </Button>
                    </div>
                </nav>
            </Container>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">richardchang.io</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header

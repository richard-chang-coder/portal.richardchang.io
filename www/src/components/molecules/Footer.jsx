'use client'
import Link from 'next/link'
import React from 'react'
import { Container } from '../atoms'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="border-t-[1px] border-t-white/10 bg-black py-8 text-base text-white ">
            <Container>
                <div className="flex flex-col gap-20 pt-10">
                    <div className="flex justify-between gap-20">
                        <div className="flex flex-col ">
                            <h3 className="-mt-[11px] text-3xl font-semibold">
                                Let's Talk
                            </h3>
                            <Link href="#" className="text-sm">
                                hello@richardchang.io
                            </Link>
                        </div>
                        <div className="flex gap-20">
                            <div className="flex flex-col gap-2 md:text-sm">
                                <div>
                                    <strong>Site Map</strong>
                                </div>
                                <ul className="flex flex-col gap-3 text-sm">
                                    <li>
                                        <Link href="#" rel="">
                                            About Me
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" rel="">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" rel="">
                                            Contact Me
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2 md:text-sm">
                                <div>
                                    <strong>Socials</strong>
                                </div>
                                <ul className="flex flex-col gap-3 text-sm text-white/60">
                                    <li>
                                        <Link href="#" rel="">
                                            LinkedIn
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" rel="">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" rel="">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" rel="">
                                            Dribble
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" rel="">
                                            GitHub
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 border-t-white/10 text-xs text-white/50">
                        <div className="w-3/4">
                            <p className="text-inherit">
                                © 2023 richardchang.io
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Link href="#">Terms And Condition</Link>
                            <Link href="#">Cookies Policy</Link>
                        </div>
                        {/* <div>
                            <span className="inline-flex justify-center gap-5 mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                                <a>
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        ></path>
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                            stroke="none"
                                        ></circle>
                                    </svg>
                                </a>
                            </span>
                        </div> */}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer

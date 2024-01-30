'use client'
import React from 'react'
import { Section, Container, Button } from '../atoms'
import { Heading } from '../molecules/Index'

const ContactMe = () => {
    return (
        <Section>
            <Container>
                <Heading tagline="Get a quote" heading="It all starts here." />
                <form className="mt-10">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Use a permanent address where you can receive
                                mail.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            autoComplete="message"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-6">
                                    <label
                                        htmlFor="budget"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Budget
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="budget"
                                            name="budget"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            <option>
                                                $500 - $5000 ( For small or
                                                pilot projects, like marketing
                                                sites, PoCs or branding.)
                                            </option>
                                            <option>
                                                $5000 - $10 0000 ( For mid-size
                                                projects, like corporate
                                                websites or MVPs)
                                            </option>
                                            <option>
                                                $20 000 - $30 0000 ( For
                                                projects that are tailor-made
                                                e-commerces sites)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-x-6">
                        <div className="flex flex-col text-xs text-gray-500">
                            Hate contact forms?
                            <a
                                href="mailto:hello@richardchang.io"
                                rel="mail link"
                            >
                                hello@richardchang.io
                            </a>
                        </div>
                        <Button type="submit" intent="contained">
                            Send Message
                        </Button>
                    </div>
                </form>
            </Container>
        </Section>
    )
}

export default ContactMe

'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { Section } from '@/components/atoms'
import PortfolioCardSimple from '@/components/molecules/PortfolioCardSimple'

import portfolioList from './../../app/portfolioList.json'

const PortfolioSlider = () => {
    const controls = useAnimation()

    useEffect(() => {
        const tickerAnimation = async () => {
            controls.start({
                x: '-100%', // Initial position (off the left side)
                transition: {
                    x: {
                        type: 'tween',
                        duration: portfolioList.length * 5, // Adjust the duration based on the number of cards
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                },
            })
        }

        tickerAnimation()

        return () => {
            controls.stop()
        }
    }, [controls, portfolioList.length])

    return (
        <Section className="-translate-y-24 overflow-hidden !py-0">
            <motion.div animate={controls} className="flex gap-10">
                {portfolioList.map((portfolio, idx) => (
                    <div className="min-w-[500px]" key={idx}>
                        <PortfolioCardSimple data={portfolio} />
                    </div>
                ))}
            </motion.div>
        </Section>
    )
}

export default PortfolioSlider

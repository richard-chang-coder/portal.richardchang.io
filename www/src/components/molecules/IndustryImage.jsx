'use client'
import React from 'react'
import { motion } from 'framer-motion'

const IndustryImage = ({ src }) => {
    return (
        <motion.div
            key={src} // Adding a unique key for Framer Motion to recognize changes
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
            animate={{ opacity: 1, y: 0 }} // Animate to fully visible and at normal position
            exit={{ opacity: 0, y: -20 }} // Exit state (hidden and slightly above)
            transition={{ duration: 0.3 }}
            className="-mb-10 -mr-10 h-full rounded-3xl bg-green-400"
        >
            {src} hello
        </motion.div>
    )
}

export default IndustryImage

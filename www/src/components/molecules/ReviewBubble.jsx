'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ReviewBubble = ({ src, className }) => {
    return (
        <motion.div
            key={src} // Adding a unique key for Framer Motion to recognize changes
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
            animate={{ opacity: 1, y: 0 }} // Animate to fully visible and at normal position
            exit={{ opacity: 0, y: -20 }} // Exit state (hidden and slightly above)
            transition={{ duration: 0.2 }}
            className={` border-1 -mr-10 max-w-xs rounded-3xl bg-white px-5 py-5 text-xs shadow-lg ${className}`}
        >
            <p className="mb-5 leading-relaxed ">
                "We enlisted the services of Richard Chang to rejuvenate our
                website, and the result has been nothing short of phenomenal.
                Richard displayed a high level of responsiveness and
                collaboration throughout the project. He worked meticulously
                with us to create various design iterations, offering valuable
                suggestions while remaining flexible to our specific
                requirements..."
            </p>
            <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                <h5 className="text-sm">
                    <strong>Eugene</strong> -{' '}
                    <span className="text-black/50">Project Manger</span>
                </h5>
            </div>
        </motion.div>
    )
}

export default ReviewBubble

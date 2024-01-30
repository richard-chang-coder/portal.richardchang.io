'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PortfolioCard = ({ data, ...props }) => {
    return (
        <Link
            className={`group  relative flex h-[600px] w-full flex-col justify-between overflow-hidden rounded-md  no-underline`}
            style={{ backgroundColor: data?.background_color }}
            href="#"
            {...props}
        >
            <div className="relative z-10 p-10">
                <div className="text-sm font-medium text-white opacity-60">
                    {data?.end_date}
                </div>
                <h3 className="mb-5 text-xl font-semibold text-white">
                    {data?.blurb}
                </h3>
                <div className="translate-y-5 text-[0.845rem] font-medium text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-60">
                    Case Study
                </div>
            </div>
            <div className="absolute bottom-0">
                <Image
                    className="w-full transition-all duration-700  ease-in-out group-hover:scale-[1.09]"
                    src={data?.image_thumbnail.src}
                    width={400}
                    height={200}
                    alt="art"
                />
            </div>
            <div className="absolute top-0 h-full w-full bg-black opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-40"></div>
        </Link>
    )
}

export default PortfolioCard

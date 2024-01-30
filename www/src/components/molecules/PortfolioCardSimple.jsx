'use client'
import React from 'react'
import Link from 'next/link'

const PortfolioCardSimple = ({ data, ...props }) => {
    return (
        <Link
            className="group relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-2xl bg-cover no-underline hover:overflow-visible"
            href="#"
            style={{
                backgroundImage:
                    'url(https://cdn.dribbble.com/userupload/10348190/file/original-bd3d14feb453dfcec200f5a61d5d703d.png?resize=752x566&vertical=center)',
                backgroundColor:
                    data?.background_color /* use the theme import to add config values */,
            }}
            {...props}
        >
            {/* <div className="absolute bottom-0">
                <Image
                    className="w-full transition-all ease-in-out  duration-700 group-hover:scale-[1.09] z-20"
                    src={data?.image_thumbnail?.src}
                    width={400}
                    height={200}
                    alt="art"
                />
            </div> */}
            <div className="relative z-10 p-6 ">
                <h3 className="text-base font-semibold leading-relaxed text-white transition-all duration-500 ease-in-out group-hover:opacity-0">
                    {data?.url}
                </h3>
                <div className="mb-5 text-sm font-medium text-white transition-all duration-500 ease-in-out group-hover:opacity-0">
                    {data?.blurb}
                </div>

                <div className="flex gap-2 bg-gradient-to-b transition-all duration-500 ease-in-out group-hover:opacity-0">
                    {data.tags.map((tag, idx) => (
                        <div
                            key={idx}
                            className="rounded-full border-[1px] border-white/50 px-3 text-[0.85rem] font-light text-white"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-0 h-full w-full bg-black opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-0"></div>
        </Link>
    )
}

export default PortfolioCardSimple

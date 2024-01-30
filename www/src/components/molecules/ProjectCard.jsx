import React from 'react'
import Image from 'next/image'
import { Heading } from './Index'
import { Badge } from '../atoms'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
    return (
        <div className={`flex flex-col-reverse md:flex-row md:gap-20 md:py-5`}>
            <div className="flex flex-1 flex-col md:justify-between md:py-5 ">
                <div className="mb-20">
                    <Heading tagline={project.client} heading={project.blurb} />

                    <div className="mt-6 flex gap-4">
                        {project.tags.map((tag, idx) => (
                            <Badge key={idx} label={tag} />
                        ))}
                    </div>
                </div>
                <Link
                    href="#"
                    className="pr-5 transition ease-in-out group-hover:text-primary"
                >
                    View Project
                </Link>
            </div>
            <div className="mb-5 overflow-hidden rounded-xl transition ease-in-out group-hover:shadow-3xl md:mb-0 md:w-1/2">
                <Image
                    className="w-full bg-green-800"
                    src={project.image_thumbnail.src}
                    width={1040}
                    height={200}
                    alt={project.client}
                />
            </div>
        </div>
    )
}

export default ProjectCard

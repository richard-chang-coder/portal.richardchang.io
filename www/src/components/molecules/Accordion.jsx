'use client'
import { useEffect, useState } from 'react'
import { Badge } from '../atoms'

const Accordion = ({ selected = null, onClick = null, items }) => {
    const [openIndex, setOpenIndex] = useState(0)

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    useEffect(() => {
        setOpenIndex(selected)
    }, [selected])

    return (
        <div className="flex flex-col gap-5">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() =>
                            onClick === null
                                ? handleToggle(index)
                                : onClick(index)
                        }
                        className={`w-full text-left text-3xl font-bold transition duration-300 ease-in-out hover:text-primary ${
                            openIndex === index
                                ? 'text-primary'
                                : 'text-black/50'
                        }`}
                    >
                        {item.label}
                    </button>
                    {openIndex === index && (
                        <div className="mb-10 rounded-md py-2">
                            <p>{item.description}</p>
                            <div className="mt-5 flex gap-2">
                                {item.tags.map((tag, index) => (
                                    <Badge label={tag} key={index} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion

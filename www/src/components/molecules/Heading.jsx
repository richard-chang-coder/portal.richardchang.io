import React from 'react'
import { Tagline } from '../atoms'

const Heading = ({ heading, tagline, className }) => {
    return (
        <div>
            <Tagline text={tagline} className={`${className}`} />
            <h2 dangerouslySetInnerHTML={{ __html: heading }} />
        </div>
    )
}

export default Heading

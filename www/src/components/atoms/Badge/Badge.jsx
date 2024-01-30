import React from 'react'

const Badge = ({ label, ...props }) => {
    return (
        <div
            {...props}
            className="rounded-md border p-1 px-4 text-xs shadow-sm"
        >
            {label}
        </div>
    )
}

export default Badge

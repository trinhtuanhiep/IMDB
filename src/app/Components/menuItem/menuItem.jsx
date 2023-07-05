import Link from 'next/link'
import React from 'react'
import './menuItem.scss'
export default function MenuItem({
    title,
    address,
    Icon
}) {
    return (
        <div>
            <Link href={address} >
                <Icon className='header_home_icon' />
                <p className='header_home_text'>{title}</p>
            </Link>
        </div>
    )
}

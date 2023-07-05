import React from 'react'
import MenuItem from "../menuItem/menuItem"
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import "./header.scss"
import Link from 'next/link';
export default function Header() {
    return (
        <div className='header'>
            <div className='menuItem'>
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/" Icon={AiFillInfoCircle} />
            </div>
            <div className='logo'>
                <Link href="/">
                    <h2 className='header_logo'>IMDB</h2>
                </Link>
            </div>
        </div>
    )
}

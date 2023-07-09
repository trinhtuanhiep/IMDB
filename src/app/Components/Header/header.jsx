"use client";
import React from 'react'
import MenuItem from "../menuItem/menuItem"
import { AiFillHome, AiFillInfoCircle  } from 'react-icons/ai';
import "./header.scss"
import Link from 'next/link';
import DarkMode from '../DarkMode/DarkMode';
export default function Header() {
    return (
        <div className='header'>
            <div className='menuItem'>
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className='logo'>
                <DarkMode  />
                <Link href="/">
                    <h2 className='header_logo'>IMDB</h2>
                </Link>
            </div>
        </div>
    )
}

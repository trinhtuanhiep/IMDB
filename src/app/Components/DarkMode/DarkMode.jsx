"use client";
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdLightMode } from 'react-icons/md'
import "./DarkMode.scss"
export default function DarkMode() {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() => {
        setMounted(true)
    }, []);
    return <>
        {mounted && currentTheme === "dark" ? <MdLightMode className= "darkMode_icon" onClick={() => setTheme("light")} /> : <BsFillMoonFill className= "darkMode_icon" onClick={() => setTheme("dark")} />}
    </>





}

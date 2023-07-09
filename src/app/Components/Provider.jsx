"use client";
import { ThemeProvider } from 'next-themes'
import React from 'react'
export default function Provider({ children }) {
    return <ThemeProvider className enableSystem={true} attribute="class">
        <div className='background'>
        {children}
        </div>
        </ThemeProvider>

}


"use client";
import Header from './Components/Header/header'
import './globals.css'
import Provider from './Components/Provider'

export const metadata = {
  title: 'imdb',
  description: 'this is a imdb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='background'>
            <Header />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}

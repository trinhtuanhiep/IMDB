
import './globals.css'
export const metadata = {
  title: 'imdb',
  description: 'this is a imdb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

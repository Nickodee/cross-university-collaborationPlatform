import './globals.css'

export const metadata = {
  title: 'CUSIP',
  description: 'Cross University Interaction Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

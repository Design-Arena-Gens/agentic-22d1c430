export const metadata = {
  title: 'Test Application',
  description: 'A test Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

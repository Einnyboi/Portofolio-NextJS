// app/layout.tsx
import './globals.css'
import React from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Cathrine Sandrina | Portfolio',
  description: 'A portfolio built with Next.js',
}

// Define the type for the props
interface RootLayoutProps {
  children: React.ReactNode;
}

// Apply the type to the component's props
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
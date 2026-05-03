import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PayGuard — Early Warning for Payment Processor Suspensions',
  description: 'Monitor account health across payment processors and get alerted before suspensions happen. Protect your Stripe, PayPal, and other payment accounts.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4230ee9-6c34-4a4a-aa2d-a000054ea0db"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

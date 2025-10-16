import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Tarantula Studio',
    template: '%s | Tarantula Studio'
  },
  description:  'Tarantula Studio — Desarrollo de software, web, diseño gráfico, IA, soporte técnico y fotografía.',
  openGraph: {
    title: 'Tarantula Studio',
    description:
      'Tarantula Studio — Desarrollo de software, web, diseño gráfico, IA, soporte técnico y fotografía.',
    url: '/',
    siteName: 'Tarantula Studio',
    images: [
      {
        url: '/logo_negro.png',
        width: 1200,
        height: 630,
        alt: 'Tarantula Studio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarantula Studio',
    description:
      'Tarantula Studio — Desarrollo de software, web, diseño gráfico, IA, soporte técnico y fotografía.',
    images: ['/logo_negro.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/logo_negro.png',
    apple: '/apple-touch-icon.png',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <div className="flex items-center gap-2 pb-4">
                <img src="/logo_negro.png" alt="Tarantula Studio" className="h-8 w-auto dark:hidden" />
                <img src="/logo_blanco.png" alt="Tarantula Studio" className="hidden h-8 w-auto dark:block" />
              </div>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

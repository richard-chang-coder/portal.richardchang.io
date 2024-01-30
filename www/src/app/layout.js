import '../styles/globals.css'
import { Poppins } from 'next/font/google'

import Header from '@/components/molecules/Header'
import Footer from '@/components/molecules/Footer'

import { UIColumn } from '@/components/molecules/Index'

const poppins = Poppins({
    weight: ['400', '700', '600', '800', '900'],
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Richard Chang - Web Developer',
    description: 'Web Deveoper',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.variable}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

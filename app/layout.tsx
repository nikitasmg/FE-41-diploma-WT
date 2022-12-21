import './globals.css'

import { Roboto } from '@next/font/google'

import { CONSTANTS } from '../commons/constants'
import WTFooter from '../components/Layout/WTFooter'
import WtNavbar from '../components/Layout/WTNavbar'
import Providers from './providers/Providers'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin', 'cyrillic'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" className={roboto.className}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>WT</title>
            </head>
            <body>
                <Providers>
                    <div className="absolute z-10 max-w-7xl py-2 text-4xl font-black text-white ">
                        WorldTrains
                    </div>
                    <WtNavbar links={CONSTANTS.LINKS} />
                    {children}
                    <WTFooter />
                </Providers>
            </body>
        </html>
    )
}

import './styles/globals.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    weight: ['100', '400', '500', '700' ]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>WT</title>
        </head>
      <body>{children}</body>
    </html>
  )
}

import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

import type { IHeader } from '../../models'

type NavbarProps = {
    links: IHeader.Link[]
}

const WtNavbar: FC<NavbarProps> = ({ links }) => {
    return (
        <nav className="l absolute inset-x-0 top-20 z-10 bg-black-300 py-6">
            <div className="mx-auto max-w-7xl space-x-20">
                {links.map((link: IHeader.Link) => (
                    <Link
                        className="text-3xl font-light text-white"
                        href={link.href}
                        key={link.text}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default WtNavbar

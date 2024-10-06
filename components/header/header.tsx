import Link from "next/link"

import { Menu } from "./menu"

export const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 px-80 py-4 bg-gray-03 shadow-special">
            <Link href='/' className="px-12 py-1 text-center font-black text-2xl text-black-special bg-white rounded-lg">LOGO</Link>
            <Menu />
        </header>
    )
}
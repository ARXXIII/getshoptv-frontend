'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { useActiveSection } from "@/context/active-section/active-section-context"

import { Menu } from "./menu"

export const Header = () => {
    const [hasShadow, setHasShadow] = useState(false)

    const { activeSection } = useActiveSection()

    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const { top } = headerRef.current.getBoundingClientRect()

                setHasShadow(top === 0)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header ref={headerRef} className={cn("flex justify-between items-center sticky top-0 px-80 py-4 bg-gray-03 transition-shadow z-50",
            hasShadow && 'shadow-special'
        )}>
            <Link href='/' className="px-12 py-1 text-center font-black text-2xl text-black-special bg-white rounded-lg">LOGO</Link>
            <Menu activeSection={activeSection!} />
        </header>
    )
}
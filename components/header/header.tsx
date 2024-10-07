'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { useActiveSection } from "@/context/active-section/active-section-context"

import { Menu } from "./menu"
import { MenuMobile } from "./menu-mobile"
import { IoClose, IoMenuOutline } from "react-icons/io5"

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [hasShadow, setHasShadow] = useState<boolean>(false)

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
        <header ref={headerRef} className={cn("flex justify-between items-center sticky top-0 px-4 md:px-10 lg:px-80 py-4 bg-gray-03 transition-shadow z-50",
            hasShadow && 'shadow-special',
            isOpen && 'bg-white shadow-none'
        )}>
            <Link href='/' className="px-8 lg:px-12 py-1 text-center font-black text-base md:text-xl lg:text-2xl text-black-special bg-white rounded-lg">LOGO</Link>
            <Menu activeSection={activeSection} />
            <div className="flex lg:hidden items-start justify-end absolute right-4 md:right-10">
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-orange-special rounded-md p-1.5 border-2 border-orange-special transition-colors"
                    >
                        {isOpen ? <IoClose className="size-4 md:size-6" /> : <IoMenuOutline className="size-4 md:size-6" />}
                    </button>
                </div>
            </div>
            <MenuMobile isOpen={isOpen} activeSection={activeSection} onClose={() => setIsOpen(false)} />
        </header>
    )
}
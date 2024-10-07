import Link from "next/link"

import { cn } from "@/lib/utils"

export const Menu = ({ activeSection }: { activeSection: string | null }) => {
    return (
        <nav className="flex gap-x-16">
            <Link href='#section1' className={cn("text-sm text-black hover:text-orange-special active:border-b active:border-b-orange-special transition-colors",
                activeSection === 'section1' && 'text-orange-special'
            )}>Преимущества</Link>
            <Link href='#section2' className={cn("text-sm text-black hover:text-orange-special active:border-b active:border-b-orange-special transition-colors",
                activeSection === 'section2' && 'text-orange-special'
            )}>Как работаем</Link>
        </nav>
    )
}
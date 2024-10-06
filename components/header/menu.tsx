import Link from "next/link"

export const Menu = () => {
    return (
        <nav className="flex gap-x-16">
            <Link href='/' className="text-sm text-black hover:text-orange-special active:border-b active:border-b-orange-special transition-colors">Преимущества</Link>
            <Link href='/' className="text-sm text-black hover:text-orange-special active:border-b active:border-b-orange-special transition-colors">Как работаем</Link>
        </nav>
    )
}
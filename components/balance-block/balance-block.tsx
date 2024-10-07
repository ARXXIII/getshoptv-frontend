import { Bullet } from "../bullet"

type BalanceBlockProps = {
    title: string
    description: string
}

export const BalanceBlock = ({ title, description }: BalanceBlockProps) => {
    return (
        <div className="space-y-4 p-6 lg:p-8">
            <Bullet />
            <h2 className="font-bold text-base lg:text-2xl text-black">{title}</h2>
            <p className="text-xs lg:text-lg text-black leading-5">{description}</p>
        </div>
    )
}
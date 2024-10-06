import { Bullet } from "../bullet"

type BalanceBlockProps = {
    title: string
    description: string
}

export const BalanceBlock = ({ title, description }: BalanceBlockProps) => {
    return (
        <div className="space-y-4 p-8">
            <Bullet />
            <h2 className="font-bold text-2xl text-black">{title}</h2>
            <p className="text-lg text-black leading-5">{description}</p>
        </div>
    )
}
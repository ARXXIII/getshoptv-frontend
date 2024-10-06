import { Bullet } from "../bullet"

export const Option = ({ option }: { option: string }) => {
    return (
        <div className="flex gap-x-8">
            <Bullet />
            <p className="max-w-[560px] text-black text-2xl">{option}</p>
        </div>
    )
}
import { Bullet } from "../bullet"

export const Option = ({ option }: { option: string }) => {
    return (
        <div className="flex gap-x-4 lg:gap-x-8">
            <Bullet />
            <p className="w-fit lg:max-w-[560px] text-sm lg:text-2xl text-black">{option}</p>
        </div>
    )
}
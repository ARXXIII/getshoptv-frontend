import { IoArrowForwardOutline } from "react-icons/io5"

export const Bullet = () => {
    return (
        <div className="w-fit">
            <div className="size-[18px] lg:size-6 flex justify-center items-center text-white rounded-full bg-orange-special">
                <IoArrowForwardOutline className="size-3 lg:size-4 -rotate-45" />
            </div>
        </div>
    )
}
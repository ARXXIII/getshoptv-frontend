import Image from "next/image"

import { BalanceBlock } from "./balance-block"

export const Balance = () => {
    return (
        <div className="space-y-8 lg:space-y-28 px-4 md:px-10 lg:px-80 py-[42px] md:py-20 lg:py-28 bg-gray-04">
            <h1 className="md:text-center font-bold text-2xl md:text-[28px] lg:text-[32px] text-black-special">Баланс между выручкой и<br className="hidden md:block lg:hidden" />удовлетворённостью пользователей</h1>
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 lg:gap-x-8">
                <BalanceBlock title='Частотность под контролем' description='Чтобы не ронять NPS и не увеличивать отток пользователей' />
                <div className="flex flex-col md:flex-row justify-between items-center w-[2px] md:w-full h-48 md:h-[2px] bg-orange-special">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-special" />
                    <div className="flex justify-center items-center size-20 lg:size-[120px] rounded-2xl bg-orange-special">
                        <Image
                            src='/vector.svg'
                            alt="vector"
                            width={80}
                            height={80}
                            className="size-14 lg:size-20"
                        />
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-special" />
                </div>
                <BalanceBlock title='Максимальная выручка' description='За счёт заполнения всех рекламных мест по высокой цене' />
            </div>
        </div>
    )
}
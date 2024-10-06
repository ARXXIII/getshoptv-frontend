import Image from "next/image"
import { BalanceBlock } from "./balance-block"

export const Balance = () => {
    return (
        <div className="space-y-28 px-80 py-28 bg-gray-04">
            <h1 className="text-center font-bold text-[32px] text-black-special">Баланс между выручкой и удовлетворённостью пользователей</h1>
            <div className="flex justify-between items-center gap-x-8">
                <BalanceBlock title='Частотность под контролем' description='Чтобы не ронять NPS и не увеличивать отток пользователей' />
                <div className="flex justify-between items-center w-full h-[2px] bg-orange-special">
                    <div className="w-2 h-2 rounded-full bg-orange-special" />
                    <div className="flex justify-center items-center size-[120px] rounded-2xl bg-orange-special">
                        <Image
                            src='/vector.svg'
                            alt="vector"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-orange-special" />
                </div>
                <BalanceBlock title='Максимальная выручка' description='За счёт заполнения всех рекламных мест по высокой цене' />
            </div>
        </div>
    )
}
import { Option } from "./option"
import { Button } from "../ui/button"
import Image from "next/image"

const options = [
    'Выручка, CTR, показы и другие показатели в реальном времени.',
    'Инструменты контроля качества трафика.',
    'Ежемесячные автоматические отчёты для каждого правообладателя.',
]

export const Reports = () => {
    return (
        <div className="flex justify-between items-center py-28 pl-80 bg-gray-04 overflow-hidden">
            <div>
                <h1 className="font-bold text-[32px] text-black-special">Подробные отчёты для вас и<br />правообладателей</h1>

                <div className="mt-8 space-y-5">
                    {options.map((option) => (
                        <Option key={option} option={option} />
                    ))}
                </div>

                <Button variant='black' className="mt-20 px-11 py-3 rounded-lg">Заказать звонок</Button>
            </div>
            <Image
                src='/laptop.png'
                alt="laptop"
                width={720}
                height={720}
                className="-mr-28"
            />
        </div>
    )
}
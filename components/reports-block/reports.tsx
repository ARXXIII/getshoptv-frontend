import Image from "next/image"

import { Option } from "./option"
import { Button } from "../ui/button"

const options = [
    'Выручка, CTR, показы и другие показатели в реальном времени.',
    'Инструменты контроля качества трафика.',
    'Ежемесячные автоматические отчёты для каждого правообладателя.',
]

export const Reports = () => {
    return (
        <div className="md:flex justify-between items-center relative py-6 md:py-12 lg:py-28 md:pl-10 lg:pl-80 bg-gray-04 overflow-hidden">
            <div className="space-y-8 px-4 md:px-0 md:min-w-[300px]">
                <h1 className="font-bold text-2xl md:text-[28px] lg:text-[32px] text-black-special leading-8">Подробные <br className="lg:hidden" />отчёты для вас и<br />правообладателей</h1>

                <div className="space-y-5">
                    {options.map((option) => (
                        <Option key={option} option={option} />
                    ))}
                </div>

                <Button variant='black' className="lg:mt-20 px-11 py-3 w-full md:w-fit rounded-lg">Заказать звонок</Button>
            </div>
            <div className="py-[50px] md:py-0 pl-4 md:px-0 w-[600px] lg:w-[700px] md:translate-x-20">
                <Image
                    src='/laptop.png'
                    alt="laptop"
                    width={2000}
                    height={2000}
                    priority
                />
            </div>
        </div>
    )
}
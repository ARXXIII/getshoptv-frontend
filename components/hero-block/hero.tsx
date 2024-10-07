import { Toggle } from "../toggle"
import { Button } from "../ui/button"

const toggleProps = [
    {
        condition: 'Операторам',
        result: `Найдите идеальный баланс выручки
        и удовлетворённости пользователей с платформой
        рекламной монетизации`
    },
    {
        condition: 'ОТТ сервисам',
        result: `Дополнительные возможности обогащения данных
        об аудитории и монетизации`
    }
]

export const Hero = () => {
    return (
        <div className="px-4 md:px-10 lg:px-80 py-12 lg:py-28">
            <div className="space-y-8 text-black-special">
                <h1 className="font-bold text-[36px] md:text-[52px] lg:text-[80px] leading-none">Монетизируйте клиентскую<br />базу, не снижая NPS</h1>
                <h2 className="text-base md:text-sm lg:text-2xl">Найдите идеальный баланс выручки<br />и удовлетворённости пользователей с платформой<br />рекламной монетизации</h2>
            </div>
            <Button variant='orange' className="mt-28 md:mt-[60px] lg:mt-20 px-11 py-3 w-full lg:w-fit rounded-lg">Заказать звонок</Button>
            <div className="md:flex md:justify-between space-y-6 md:space-y-0 mt-20 md:mt-[120px] lg:mt-[180px]">
                <h1 className="font-bold text-2xl md:text-[28px] lg:text-[32px] leading-8 lg:leading-10">Дополнительные <br className="hidden md:block lg:hidden" />источники<br className="md:hidden lg:block" /> выручки <br className="hidden md:block lg:hidden" />для разных<br />компаний</h1>
                <Toggle props={toggleProps} />
            </div>
        </div>
    )
}
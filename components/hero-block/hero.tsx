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
        <div className="px-80">
            <div className="space-y-8 text-black-special">
                <h1 className="font-bold text-[80px] leading-none">Монетизируйте клиентскую<br />базу, не снижая NPS</h1>
                <h2 className="text-2xl">Найдите идеальный баланс выручки<br />и удовлетворённости пользователей с платформой<br />рекламной монетизации</h2>
            </div>
            <Button variant='orange' className="mt-20 px-11 py-3 rounded-lg">Заказать звонок</Button>
            <div className="flex justify-between mt-[180px]">
                <h1 className="font-bold text-[32px] leading-none">Дополнительные источники<br />выручки для разных<br />компаний</h1>
                <Toggle props={toggleProps} />
            </div>
        </div>
    )
}
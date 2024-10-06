import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"

export const ContactForm = () => {
    return (
        <div className="space-y-16 px-80 py-28">
            <h1 className="font-bold text-[32px] text-black-special">Заполните форму</h1>
            <form className="flex justify-between gap-x-10">
                <Textarea placeholder="Напишите свой вопрос" className="px-[18px] py-[14px] text-lg border-gray-01 focus:border-black-special rounded-xl bg-gray-03 placeholder:text-black-special resize-none" />
                <div>
                    <div className="space-y-8 min-w-[560px]">
                        <Input
                            placeholder="Введите e-mail"
                            className="text-lg px-0 pt-[10px] pb-4 border-x-0 border-t-0 border-b border-b-gray-01 focus:border-black-special rounded-none bg-gray-03 placeholder:text-black-special"
                        />
                        <div className="flex items-start gap-x-2">
                            <Checkbox id="terms" className="w-[14px] h-[14px] border-gray-01 checked:bg-orange-special" />
                            <Label htmlFor="terms" className="text-sm leading-5">Я ознакомлен(а) с политикой конфиденциальности и<br />согласен(на) на обработку персональных данных.</Label>
                        </div>
                    </div>
                    <Button variant='black' className="mt-12 w-full rounded-lg">Отправить</Button>
                </div>
            </form>
        </div>
    )
}
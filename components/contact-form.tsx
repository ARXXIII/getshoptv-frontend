'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { FormErrorMessage } from "./form-error"

export const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [errors, setErrors] = useState({ email: '', message: '', terms: '' })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newErrors = { email: '', message: '', terms: '' }

        if (!email) {
            newErrors.email = 'Неправильно указана почта'
        }

        if (!message) {
            newErrors.message = 'Пожалуйста, напишите свой вопрос'
        }

        if (!termsAccepted) {
            newErrors.terms = 'Вы должны согласиться с политикой конфиденциальности'
        }

        setErrors(newErrors)

        if (!newErrors.email && !newErrors.message && !newErrors.terms) {
            console.log('Форма отправлена')
        }
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)

        if (errors.message && e.target.value) {
            setErrors(prevErrors => ({ ...prevErrors, message: '' }))
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)

        if (errors.email && validateEmail(e.target.value)) {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }))
        }
    }


    const handleCheckboxChange = (checked: boolean) => {
        setTermsAccepted(checked)

        if (errors.terms && checked) {
            setErrors(prevErrors => ({ ...prevErrors, terms: '' }))
        }
    }

    return (
        <div className="space-y-16 px-80 py-28">
            <h1 className="font-bold text-[32px] text-black-special">Заполните форму</h1>
            <form className="flex justify-between gap-x-10" onSubmit={handleSubmit}>
                <div className="relative space-y-[5px] min-w-[560px]">
                    <Textarea
                        placeholder="Напишите свой вопрос"
                        value={message}
                        onChange={handleMessageChange}
                        className={cn('px-[18px] py-[14px] h-full text-lg border border-gray-01 focus:border-black-special rounded-xl bg-gray-03 placeholder:text-black-special resize-none',
                            errors.message && 'border-error'
                        )}
                    />

                    {errors.message && (
                        <FormErrorMessage message={errors.message} />
                    )}

                </div>
                <div>
                    <div className="space-y-8 min-w-[560px]">
                        <div className="relative space-y-[5px]">
                            <Input
                                type="email"
                                placeholder="Введите e-mail"
                                value={email}
                                onChange={handleEmailChange}
                                className={cn('text-lg px-0 pt-[10px] pb-4 border-x-0 border-t-0 border-b border-b-gray-01 focus:border-black-special rounded-none bg-gray-03 placeholder:text-black-special',
                                    errors.email && 'border-b-error'
                                )}
                            />

                            {errors.email && (
                                <FormErrorMessage message={errors.email} />
                            )}

                        </div>
                        <div className="relative space-y-[5px]">
                            <div className="flex items-start gap-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={termsAccepted}
                                    onCheckedChange={handleCheckboxChange}
                                    className="flex justify-center items-center size-[14px] text-[5px] border-gray-01 data-[state=checked]:border-orange-special data-[state=checked]:bg-orange-special"
                                />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm leading-5"
                                >
                                    Я ознакомлен(а) с политикой конфиденциальности и<br />согласен(на) на обработку персональных данных.
                                </Label>
                            </div>

                            {errors.terms && (
                                <FormErrorMessage message={errors.terms} />
                            )}

                        </div>
                    </div>
                    <Button variant='black' className="mt-12 w-full rounded-lg">Отправить</Button>
                </div>
            </form>
        </div>
    )
}

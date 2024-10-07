'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"

import { Button } from "./ui/button"

type Props = {
    condition: string
    result?: string
}

interface ToggleProps {
    props: Props[]
}

export const Toggle = ({ props }: ToggleProps) => {
    const [selected, setSelected] = useState<string>(props[0].condition)

    return (
        <div className="space-y-6 md:space-y-4 lg:space-y-8">

            <div className="flex gap-x-[1px] p-0.5 rounded-[14px] bg-white">
                {props.map((el) => (
                    <Button
                        key={el.condition}
                        variant='toggle'
                        onClick={() => setSelected(el.condition)}
                        className={cn('px-8 lg:px-16 py-[10px] w-full text-xs md:text-base lg:text-2xl rounded-lg',
                            selected !== el.condition && 'text-gray-01 hover:text-black-special bg-background'
                        )}
                    >
                        {el.condition}
                    </Button>
                ))}
            </div>

            {props.map((el) => (
                <p key={el.result} className={cn('md:w-[334px] lg:w-[560px] h-24 text-base md:text-sm lg:text-xl text-black-special',
                    selected !== el.condition && 'hidden'
                )}>
                    {el.result}
                </p>
            ))}

        </div>
    )
}
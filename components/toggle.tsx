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
        <div className="space-y-8">

            <div className="flex gap-x-[1px] p-1 rounded-[14px] bg-white">
                {props.map((el) => (
                    <Button
                        key={el.condition}
                        variant='toggle'
                        onClick={() => setSelected(el.condition)}
                        className={cn('px-16 py-[10px] rounded-lg',
                            selected !== el.condition && 'text-gray-01 hover:text-black-special bg-background'
                        )}
                    >
                        {el.condition}
                    </Button>
                ))}
            </div>

            {props.map((el) => (
                <p key={el.result} className={cn('text-xl text-black-special w-[560px] h-24',
                    selected !== el.condition && 'hidden'
                )}>
                    {el.result}
                </p>
            ))}

        </div>
    )
}
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Fragment } from 'react'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'

interface MenuMobileProps {
    isOpen: boolean
    activeSection: string | null
    onClose: () => void
}

export const MenuMobile = ({ isOpen, onClose, activeSection }: MenuMobileProps) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="nav" className="relative z-40" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity" />
                </TransitionChild>
                <div className="fixed inset-0 overflow-hidden z-10">
                    <div className="fixed inset-y-0 flex min-h-full right-0">
                        <TransitionChild
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500"
                            leaveTo="translate-x-full"
                        >
                            <DialogPanel className="w-screen md:w-72">
                                <div className="flex items-center h-full bg-white">
                                    <div className="flex flex-col">
                                        <Link href='#section1' className={cn("px-8 py-[10px] text-sm text-black hover:text-orange-special active:border-b active:border-b-orange-special transition-colors",
                                            activeSection === 'section1' && 'text-orange-special'
                                        )}>
                                            Преимущества
                                        </Link>
                                        <Link href='#section2' className={cn("px-8 py-[10px] text-sm text-black hover:text-orange-special active:border-b active:border-b-orange-special transition-colors",
                                            activeSection === 'section2' && 'text-orange-special'
                                        )}>
                                            Как работаем
                                        </Link>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
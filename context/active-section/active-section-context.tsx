'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ActiveSectionContextProps {
    activeSection: string | null
    setActiveSection: (section: string | null) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextProps | undefined>(undefined)

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null)

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext)

    if (!context) {
        throw new Error('useActiveSection must be used within an ActiveSectionProvider')
    }

    return context
}

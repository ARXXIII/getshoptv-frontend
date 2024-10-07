'use client'

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useActiveSection } from "@/context/active-section/active-section-context"

interface SectionProps {
    id: string
    children: React.ReactNode
}

export const Section = ({ id, children }: SectionProps) => {
    const { setActiveSection } = useActiveSection()
    const { ref, inView } = useInView({ threshold: 0.25 })

    useEffect(() => {
        if (inView) {
            setActiveSection(id)
        }
    }, [inView, id, setActiveSection])

    return (
        <section ref={ref} id={id} className="section-class">
            {children}
        </section>
    )
}

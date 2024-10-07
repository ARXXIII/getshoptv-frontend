import { Hero } from "@/components/hero-block/hero"
import { ContactForm } from "@/components/contact-form"
import { Section } from "@/context/active-section/section"
import { Balance } from "@/components/balance-block/balance"
import { Reports } from "@/components/reports-block/reports"
import { Partners } from "@/components/partners-block/partners"

export default function Home() {
    return (
        <article>
            <Hero />
            <Section id="section1">
                <Balance />
                <Partners />
            </Section>
            <Section id="section2">
                <Reports />
            </Section>
            <ContactForm />
        </article>
    )
}

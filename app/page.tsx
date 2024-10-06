import { Hero } from "@/components/hero-block/hero"
import { ContactForm } from "@/components/contact-form"
import { Balance } from "@/components/balance-block/balance"
import { Reports } from "@/components/reports-block/reports"
import { Partners } from "@/components/partners-block/partners"

export default function Home() {
    return (
        <article className="space-y-20">
            <Hero />
            <Balance />
            <Partners />
            <Reports />
            <ContactForm />
        </article>
    )
}

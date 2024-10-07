import type { Metadata } from "next";
import { Onest } from "next/font/google"
import { Header } from "@/components/header/header"
import { ActiveSectionProvider } from "@/context/active-section/active-section-context"
import Image from "next/image"
import "./globals.css"

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${onest.className} antialiased pt-4 lg:pt-8 bg-gray-03`}>
                <ActiveSectionProvider>
                    <Header />
                    <Image
                        src='/background.png'
                        alt="background"
                        fill
                        priority
                        className="object-cover object-center z-0"
                    />
                    <main className="relative z-30">
                        {children}
                    </main>
                </ActiveSectionProvider>
            </body>
        </html>
    );
}

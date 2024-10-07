import Image from "next/image"

const partners = [
    'click-wave',
    'nova-sphere',
    'zyphronix',
]

export const Partners = () => {
    return (
        <div className="md:flex md:justify-between md:items-center space-y-6 md:gap-x-[70px] lg:gap-x-24 px-4 md:px-20 lg:px-80 py-[60px] md:py-[46px] lg:py-28">
            <h2 className="font-bold text-xl md:text-base lg:text-2xl text-black-special md:shrink-0">Наши партнёры<br className="lg:hidden" />по монетизации</h2>
            <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center lg:justify-between lg:items-center gap-2 md:gap-x-12 lg:gap-x-20">

                {partners.map((partner) => (
                    <div key={partner}>
                        <Image
                            src={`/${partner}.png`}
                            alt={partner}
                            width={100}
                            height={100}
                            className="w-32 md:w-[200px]"
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}
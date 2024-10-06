import Image from "next/image"

const partners = [
    'click-wave',
    'zyphronix',
    'nova-sphere',
]

export const Partners = () => {
    return (
        <div className="flex justify-between items-center gap-x-24 px-80 py-28">
            <h2 className="font-bold text-2xl text-black-special shrink-0">Наши партнёры по монетизации</h2>
            <div className="flex justify-between items-center gap-x-20">

                {partners.map((partner) => (
                    <div key={partner}>
                        <Image
                            src={`/${partner}.png`}
                            alt={partner}
                            width={400}
                            height={400}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}
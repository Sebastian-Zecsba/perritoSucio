import Image from 'next/image'
import React from 'react'
import ButtonWhatsapp from '../ui/ButtonWhatsapp'

type Service = {
    id: number,
    title: string,
    image: string
}

const services : Service[] = [
    {
        id: 1,
        title: "Te ayudamos a elegir el modelo y la talla ideal según tu estilo y necesidades.",
        image: "/service_uno.png"
    },
    {
        id: 2,
        title: "Recibe tus tenis de forma rápida, segura y envio gratis en la puerta de tu casa.",
        image: "/service_dos.png"
    },
    {
        id: 3,
        title: "Si necesitas una talla diferente, te hacemos el cambio.",
        image: "/service_tres.png"
    }
]

export default function Services() {
  return (
    <section className='bg-[#626262] px-4 h-[190vh]'>
        <h1 className="uppercase text-white text-center font-extrabold text-2xl sm:text-3xl lg:text-4xl text-shadow-md mt-10 py-10">
            servicios
        </h1>

        <div className='flex flex-col justify-center items-center gap-10'>
            {services.map((service) => (
                <div key={service.id}>
                    <Image 
                        src={service.image}
                        alt={`${service.title} Perrito Sucio - Tenis - Zapatos`}
                        className='m-auto'
                        width={300}
                        height={300}
                    />

                    <p className="px-4 py-4 text-center text-shadow-md font-black text-xl">{service.title}</p>

                </div>
            ))
            }

            <ButtonWhatsapp />

        </div>
        
    </section>
  )
}

import Image from 'next/image'
import ButtonWhatsapp from './ButtonWhatsapp'

export default function MainImage() {
  return (
    <section className="relative w-full h-[400px] sm:h-[600px] lg:h-[80vh] overflow-hidden">
      <Image
        src="/tenisHeader.png"
        alt="Tenis para uso diario"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'grayscale(100%)'
        }}
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 gap-4">
        <h1 className="uppercase text-white text-center font-bold text-xl sm:text-3xl lg:text-4xl">
          Tenis para uso diario, versátiles, con diseños modernos y cómodos
        </h1>
        <h2 className="text-white text-center text-base sm:text-lg lg:text-xl">
          Para personas que valoran la comodidad y el estilo en su día a día
        </h2>

        <ButtonWhatsapp />
      </div>
    </section>
  )
}

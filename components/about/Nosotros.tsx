import Image from "next/image";

export default function Nosotros() {
  return (
    <section>
        <h1 className="uppercase  text-white text-center font-extrabold text-2xl sm:text-3xl lg:text-4xl text-shadow-md mt-10">
            Nosotros
        </h1>

        <p className="px-4 py-4 text-center text-shadow-md font-black text-xl">Somos una marca dedicada a ofrecer tenis cómodos y versátiles. Creemos en un diseño moderno con atención a cada detalle, para que encuentres tu estilo sin complicaciones.</p>

        <div className="w-full m-auto">
            <Image 
                src='/tenisUS.png'
                alt="Perrito Sucio - Tenis - Zapatos"
                className="m-auto"
                width={300}
                height={300}
            />
        </div>
    </section>
  )
}

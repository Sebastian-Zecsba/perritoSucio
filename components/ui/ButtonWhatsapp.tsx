import Link from "next/link";

export default function ButtonWhatsapp() {
  return (
    <div className="mt-4">
        <Link href="https://wa.link/bjasvl" target="_blank" className="bg-green-500 p-4 text-xl rounded" passHref>
            Ver catálogo por WhatsApp
        </Link>
    </div>
  )
}

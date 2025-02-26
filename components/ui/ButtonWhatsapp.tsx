"use client"

import Link from "next/link";

export default function ButtonWhatsapp() {

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq("track", "WhatsAppClick"); 
    }
    window.open("https://wa.me/123456789", "_blank");
  };

  return (
    <div className="mt-4">
        <Link href="https://wa.link/1pu11v" target="_blank" className="bg-green-500 p-4 text-xl rounded" passHref>
            Ver catálogo por WhatsApp
        </Link>
    </div>
  )
}

"use client";

export default function ButtonWhatsapp() {
  const handleClick = () => {
    // Verifica que estés en cliente y que fbq esté definido
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "WhatsAppClick");
    }
    // Abre WhatsApp en otra pestaña
    window.open("https://wa.link/1pu11v", "_blank");
  };

  return (
    <div className="mt-4">
      <a
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 text-xl rounded text-white cursor-pointer"
      >
        Ver catálogo por WhatsApp
      </a>
    </div>
  );
}

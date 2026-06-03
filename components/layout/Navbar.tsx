export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="font-bold text-xl">
          QRO Cert
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Inicio</a>
          <a href="#">Certificaciones</a>
          <a href="#">Nosotros</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
          Cotizar
        </button>
      </div>
    </header>
  );
}
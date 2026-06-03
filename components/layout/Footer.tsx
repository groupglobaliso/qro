export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h3 className="text-2xl font-bold mb-6">
          QRO Cert
        </h3>

        <p className="text-slate-400">
          Organismo certificador especializado en
          sistemas de gestión ISO.
        </p>

        <div className="mt-8 border-t border-slate-800 pt-8">
          © {new Date().getFullYear()} QRO Cert.
        </div>

      </div>
    </footer>
  );
}
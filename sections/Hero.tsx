export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 font-semibold text-blue-400">
          CERTIFICADORA INTERNACIONAL
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Certificación ISO con reconocimiento internacional
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          Ayudamos a organizaciones a implementar, auditar y certificar
          sistemas de gestión bajo estándares ISO reconocidos globalmente.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold">
            Solicitar Cotización
          </button>

          <button className="rounded-lg border border-white px-6 py-3 font-semibold">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
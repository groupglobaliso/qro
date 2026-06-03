export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          ¿Por qué elegir QRO?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Reconocimiento Internacional
            </h3>

            <p className="text-slate-600">
              Certificaciones alineadas con estándares internacionales.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Auditores Expertos
            </h3>

            <p className="text-slate-600">
              Equipo multidisciplinario con amplia experiencia.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Proceso Ágil
            </h3>

            <p className="text-slate-600">
              Metodología eficiente orientada a resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
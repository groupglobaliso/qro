export default function Certifications() {
  const certifications = [
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "ISO 27001",
    "ISO 37001",
    "ISO 22000",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Certificaciones ISO
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Certificamos sistemas de gestión bajo estándares internacionales.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <div
              key={item}
              className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>

              <p className="text-slate-600">
                Evaluación, auditoría y certificación internacional.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
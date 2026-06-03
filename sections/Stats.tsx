export default function Stats() {
  const stats = [
    { value: "500+", label: "Empresas Certificadas" },
    { value: "1000+", label: "Auditorías Realizadas" },
    { value: "15+", label: "Años de Experiencia" },
    { value: "20+", label: "Sectores Atendidos" },
  ];

  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-4xl font-bold">{item.value}</h3>
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
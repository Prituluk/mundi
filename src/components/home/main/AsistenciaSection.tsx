export default function AsistenciaSection({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Asistencia</h2>
      <ul>
        {packages.map((service) => (
          <li key={service.id} style={{ marginBottom: "2rem" }}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>
              <strong>Precio:</strong> {service.price.currency} ${service.price.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

export default function TrasladosSection({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Traslados</h2>
      <ul>
        {packages.map((transfer) => (
          <li key={transfer.id} style={{ marginBottom: "2rem" }}>
            <h3>{transfer.type}</h3>
            <p><strong>Vehículo:</strong> {transfer.vehicle}</p>
            <p><strong>Asientos:</strong> {transfer.seats}</p>
            <p>
              <strong>Precio:</strong> {transfer.price.currency} ${transfer.price.amount.toFixed(2)}
            </p>
            <p>
              <strong>Disponibilidad:</strong> {transfer.available ? "Disponible" : "No disponible"}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

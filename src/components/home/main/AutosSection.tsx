export default function AutosSection({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Autos</h2>
      <ul>
        {packages.map((car) => (
          <li key={car.id} style={{ marginBottom: "2rem" }}>
            <h3>{car.brand} {car.model}</h3>
            <p><strong>Tipo:</strong> {car.type}</p>
            <p><strong>Asientos:</strong> {car.seats}</p>
            <p>
              <strong>Precio por día:</strong> {car.price_per_day.currency} ${car.price_per_day.amount.toFixed(2)}
            </p>
            <p>
              <strong>Disponibilidad:</strong> {car.available ? "Disponible" : "No disponible"}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

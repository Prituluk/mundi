export default function CrucerosSection({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Cruceros</h2>
      <ul>
        {packages.map((cruise) => (
          <li key={cruise.id} style={{ marginBottom: "2rem" }}>
            <h3>{cruise.name}</h3>
            <p><strong>Duración:</strong> {cruise.duration_days} día{cruise.duration_days > 1 ? "s" : ""}</p>
            <p>
              <strong>Precio:</strong> {cruise.price.currency} ${cruise.price.amount.toFixed(2)}
            </p>
            <p>
              <strong>Camarotes disponibles:</strong> {cruise.available_cabins}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

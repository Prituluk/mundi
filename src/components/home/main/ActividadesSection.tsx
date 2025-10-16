export default function ActividadesSection({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Actividades</h2>
      <ul>
        {packages.map((activity) => (
          <li key={activity.id} style={{ marginBottom: "2rem" }}>
            <h3>{activity.title}</h3>
            <p><strong>Duración:</strong> {activity.duration_hours} hora{activity.duration_hours > 1 ? "s" : ""}</p>
            <p>
              <strong>Precio:</strong> {activity.price.currency} ${activity.price.amount.toFixed(2)}
            </p>
            <p>
              <strong>Disponibilidad de cupos:</strong> {activity.available_slots}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

export default function PaquetesSection({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Paquetes</h2>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id} style={{ marginBottom: "2rem" }}>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>

            <div style={{ marginBottom: "0.5rem" }}>
              <h4>Componentes incluidos:</h4>
              <ul>
                <li><strong>Vuelo:</strong> {pkg.components.flight}</li>
                <li>
                  <strong>Hotel:</strong> {pkg.components.hotel.hotel_id}, Habitación {pkg.components.hotel.room_id}, {pkg.components.hotel.nights} noche{pkg.components.hotel.nights > 1 ? "s" : ""}
                </li>
                <li><strong>Tour:</strong> {pkg.components.tour}</li>
              </ul>
            </div>

            <p>
              <strong>Precio:</strong> {pkg.price.currency} ${pkg.price.amount.toFixed(2)}
            </p>
            <p>
              <strong>Disponibilidad:</strong> {pkg.available ? "Disponible" : "No disponible"}
            </p>
            <p>
              <strong>Válido hasta:</strong> {new Date(pkg.valid_until).toLocaleDateString("es-AR")}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

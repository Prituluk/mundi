import styles from './VuelosSection.module.css';

export default function VuelosSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Vuelos</h2>
      <ul className={styles.flightList}>
        {packages.map((flight) => (
          <li key={flight.id} className={styles.flightItem}>
            <h3 className={styles.airline}>{flight.airline}</h3>

            {flight.segments.map((segment: any) => (
              <div key={segment.segment_id} className={styles.segment}>
                <p>
                  <strong>Origen:</strong> {segment.origin.city} ({segment.origin.airport_code}) — {segment.origin.country}
                </p>
                <p>
                  <strong>Destino:</strong> {segment.destination.city} ({segment.destination.airport_code}) — {segment.destination.country}
                </p>
                <p>
                  <strong>Salida:</strong>{" "}
                  {new Date(segment.departure_time).toLocaleString("es-AR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
                <p>
                  <strong>Llegada:</strong>{" "}
                  {new Date(segment.arrival_time).toLocaleString("es-AR", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
                <p>
                  <strong>Duración:</strong> {Math.floor(segment.duration_minutes / 60)}h{" "}
                  {segment.duration_minutes % 60}m
                </p>
                <p>
                  <strong>Clase:</strong> {segment.class}
                </p>
              </div>
            ))}

            <p className={styles.price}>
              <strong>Precio:</strong> {flight.price.currency} ${flight.price.amount.toFixed(2)}
            </p>
            <p className={styles.seats}>
              <strong>Asientos disponibles:</strong> {flight.available_seats}
            </p>

            <div className={styles.fareRules}>
              <h4>Condiciones de tarifa</h4>
              <ul>
                <li>
                  <strong>No reembolsable:</strong> {flight.fare_rules.non_refundable ? "Sí" : "No"}
                </li>
                <li>
                  <strong>Costo por cambio:</strong> {flight.price.currency} ${flight.fare_rules.change_fee.toFixed(2)}
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>

  )
}
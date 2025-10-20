import styles from './VuelosSection.module.css';

export default function VuelosSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Vuelos</h2>
      <ul className={styles.flightList}>
        {packages.map((flight) => (
          <li key={flight.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={flight.image} alt="" />
            </div>

            {flight.segments.map((segment: any) => (
              <div key={segment.segment_id} className={styles.segment}>
                <h3>
                  <strong>
                    {segment.origin.city} / {segment.destination.city}
                  </strong>
                </h3>
                
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
              {flight.price.currency} ${flight.price.amount.toFixed(2)}
            </p>

          </li>
        ))}
      </ul>
    </section>

  )
}
import styles from './VuelosSection.module.css';

export default function AutosSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Autos</h2>
      <ul className={styles.flightList}>
        {packages.map((car) => (
          <li key={car.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={car.image} alt="" />
            </div>
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

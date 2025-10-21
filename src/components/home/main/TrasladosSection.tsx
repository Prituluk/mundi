import styles from './VuelosSection.module.css';

export default function TrasladosSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Traslados</h2>
      <ul className={styles.flightList}>
        {packages.map((transfer) => (
          <li key={transfer.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={transfer.image} alt="" />
            </div>

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

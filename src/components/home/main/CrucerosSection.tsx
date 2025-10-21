import styles from './VuelosSection.module.css';

export default function CrucerosSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Cruceros</h2>
      <ul className={styles.flightList}>
        {packages.map((cruise) => (
          <li key={cruise.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={cruise.image} alt="" />
            </div>
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

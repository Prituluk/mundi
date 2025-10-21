import styles from './VuelosSection.module.css';

export default function ActividadesSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Actividades</h2>
      <ul className={styles.flightList}>
        {packages.map((activity) => (
          <li key={activity.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={activity.image} alt="" />
            </div>
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

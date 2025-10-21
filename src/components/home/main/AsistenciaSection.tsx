import styles from './VuelosSection.module.css';

export default function AsistenciaSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Asistencia</h2>
      <ul className={styles.flightList}>
        {packages.map((service) => (
          <li key={service.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={service.image} alt="" />
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>
              <strong>Precio:</strong> {service.price.currency} ${service.price.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </section>

  )
}

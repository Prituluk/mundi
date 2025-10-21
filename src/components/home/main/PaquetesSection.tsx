import styles from './VuelosSection.module.css';

export default function PaquetesSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.vuelosSection}>
      <h2 className={styles.title}>Paquetes</h2>
      <ul className={styles.flightList}>
        {packages.map((pkg) => (
          <li key={pkg.id} className={styles.flightItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={pkg.image} alt="" />
            </div>
            <h3>{pkg.name}</h3>
            <em>{pkg.description}</em>
            <p className={styles.price}>
              <strong>Precio:</strong> {pkg.price.currency} ${pkg.price.amount.toFixed(2)}
            </p>

          </li>
        ))}
      </ul>
    </section>

  )
}

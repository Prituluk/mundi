import styles from './VuelosSection.module.css';

export default function HotelesSection({ packages }: { packages: any[] }) {
  return (
    <section className={styles.hotelesSection}>
      <h2 className={styles.title}>Hoteles</h2>
      <ul className={styles.hotelList}>
        {packages.map((hotel) => (
          <li key={hotel.id} className={styles.hotelItem}>
            <div className={styles.imageContainer}>

              <img className={styles.image} width={300} height={300} src={hotel.image} alt="" />
            </div>
            <h3 className={styles.hotelName}>{hotel.name}</h3>
            <em>{hotel.address.city}</em>
            <p className={styles.rating}><strong>Rating:</strong> {hotel.rating} ⭐</p>


    
          </li>
        ))}
      </ul>
    </section>

  )
}

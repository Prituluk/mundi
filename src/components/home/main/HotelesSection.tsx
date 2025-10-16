import styles from './HotelesSection.module.css';

export default function HotelesSection({ packages }: { packages: any[] }) {
  return(
    <section className={styles.hotelesSection}>
  <h2 className={styles.title}>Hoteles</h2>
  <ul className={styles.hotelList}>
    {packages.map((hotel) => (
      <li key={hotel.id} className={styles.hotelItem}>
        <h3 className={styles.hotelName}>{hotel.name}</h3>
        <p className={styles.rating}><strong>Rating:</strong> {hotel.rating} ⭐</p>
        <p className={styles.address}>
          <strong>Dirección:</strong> {hotel.address.street}, {hotel.address.city}, {hotel.address.state}, {hotel.address.country} ({hotel.address.postal_code})
        </p>

        <ul className={styles.roomsList}>
          {hotel.rooms.map((room: any) => (
            <li key={room.room_id} className={styles.roomItem}>
              <p><strong>Tipo de habitación:</strong> {room.type}</p>
              <p><strong>Tipo de cama:</strong> {room.bed_type}</p>
              <p><strong>Capacidad:</strong> {room.capacity} persona{room.capacity > 1 ? "s" : ""}</p>
              <p><strong>Precio por noche:</strong> {room.price_per_night.currency} ${room.price_per_night.amount.toFixed(2)}</p>
              <p><strong>Disponibilidad:</strong> {room.available ? "Disponible" : "No disponible"}</p>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</section>

  )
}

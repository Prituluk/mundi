import { Contact } from "./footerInterfaces";


interface Props {
  contact: Contact;
}

export const ContactSection = ({ contact }: Props) => {

  const { customer_service, sales, franchises, tax_address } = contact;
  return (
    <section>
      <h3>Contact</h3>

      <div>
        <h4>Customer Service</h4>
        <p>📞 {customer_service.phone_number}</p>
        <p>🕓 {customer_service.hours}</p>
        <p>✉️ {customer_service.email}</p>
      </div>

      <div>
        <h4>Sales</h4>
        <p>📞 {sales.phone_number}</p>
        <p>💬 WhatsApp: {sales.whatsapp}</p>
        <p>🕓 {sales.hours}</p>
        <p>✉️ {sales.email}</p>
      </div>

      <div>
        <h4>Franchises</h4>
        <p>📞 {franchises.phone_number}</p>
        <p>💬 {franchises.messager}</p>
        <p>✉️ {franchises.email}</p>
      </div>

      <div>
        <h4>Tax Address</h4>
        <p>{tax_address.street}</p>
        <p>{tax_address.city}, {tax_address.country}</p>
        <p>{tax_address.postal_code}</p>
      </div>
    </section>
  )
}
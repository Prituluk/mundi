import { CompanySection } from './CompanySection';
import { ContactSection } from './ContactSection';
import { CopyrightSection } from './CopyrightSection';
import { ExtrasSection } from './ExtrasSection';
import { Contact } from './footerInterfaces';
import styles from './footer.module.css';
import { InformationSection } from './InformationSection';
import { LegalSection } from './LegalSection';




export async function Footer() {

  const res = await fetch('http://localhost:3000/api/footerData');
  if (!res.ok) {
    console.error('Failed to fetch footer data');
    return <footer>Error loading footer data</footer>;
  }
  const data = await res.json();

  const contact: Contact = data.contact;
  

  return (
    <footer>
      <CompanySection company={data.company} />
      <ContactSection contact={contact}/> 
      <ExtrasSection extras={data.extras}/>
      <InformationSection information={data.information}/>
      <LegalSection legal={data.legal}/>
      <CopyrightSection copyright={data.copyright}/>
    </footer>
  )

}
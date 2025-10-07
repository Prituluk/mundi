import { Company } from './footerInterfaces';

interface Props {
  company: Company;

}

export function CompanySection({ company }: Props) {

  return (
    <section>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <small>Fundada en : {company.age_fundation}</small>
      <em>{company.slogan}</em>
    </section>
  )
}
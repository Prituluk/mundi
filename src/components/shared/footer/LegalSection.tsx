import Link from 'next/link';
import { Legal } from './footerInterfaces';

interface Props {
  legal: Legal;
}

export const LegalSection = ({ legal }: Props) => {
  const internalLinks = [
    { label: 'Law 24240', url: legal.law_24240 },
    { label: 'General Conditions', url: legal.general_conditions },
    { label: 'Security Policy', url: legal.security_policy },
    { label: 'Privacy Policy', url: legal.privacy_policy },
    { label: 'Terms and Conditions', url: legal.terms_and_conditions },
  ];

  const { consumer_defense } = legal;

  return (
    <section>
      <h3>Legal</h3>

      <div>
        <h4>Policies & Laws</h4>
        <ul>
          {internalLinks.map(({ label, url }) => (
            <li key={label}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Consumer Defense</h4>
        <p>{consumer_defense.description}</p>
        <ul>
          <li>
            <a href={consumer_defense.claim_url} target="_blank" rel="noopener noreferrer">
              File a Complaint
            </a>
          </li>
          <li>
            <a href={consumer_defense.queries_url} target="_blank" rel="noopener noreferrer">
              Consumer Queries
            </a>
          </li>
          <li>
            <span>Address: {consumer_defense.general_address}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

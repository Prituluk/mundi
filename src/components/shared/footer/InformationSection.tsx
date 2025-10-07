
import { Information } from './footerInterfaces';
import Link from 'next/link';

interface Props {
  information: Information;
}

export const InformationSection = ({ information }: Props) => {
  const links = [
    { label: 'Who We Are', url: information.who_we_are },
    { label: 'Payment Methods', url: information.payment_methods },
    { label: 'Branches', url: information.branches },
    { label: 'Frequently Asked Questions', url: information.frequently_asked_questions },
    { label: 'Help', url: information.help },
  ];

  return (
    <section>
      <h3>Information</h3>
      <ul>
        {links.map(({ label, url }) => (
          <li key={label}>
            <Link href={url || '/'}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

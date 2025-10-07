import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Extras } from './footerInterfaces';

interface Props {
  extras: Extras;
}

// Mapa que relaciona nombre de red social con el icono
const iconMap: Record<string, IconType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

export function ExtrasSection({ extras }: Props) {
  const { follow_us, national_holidays, affiliates, rentals, online_complaints_book } = extras;

  const followUsLinks = Object.entries(follow_us); // [['facebook', 'url'], ...]

  return (
    <section>
      <h3>Extras</h3>

      <div>
        <h4>Follow Us</h4>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {followUsLinks.map(([platform, url]) => {
            const Icon = iconMap[platform.toLowerCase()];
            return (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {Icon && <Icon />}
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h4>Other Links</h4>
        <ul>
          <li><a href={national_holidays}>National Holidays</a></li>
          <li><a href={affiliates}>Affiliates</a></li>
          <li><a href={rentals}>Rentals</a></li>
          <li><a href={online_complaints_book}>Online Complaints Book</a></li>
        </ul>
      </div>
    </section>
  );
}

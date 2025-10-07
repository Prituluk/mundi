import Link from "next/link";
import styles from './header.module.css';

type MenuItem = {
  name: string;
  slug: string;
  icon?: any;
  description?: string;
}

export async function Header() {

  const res = await fetch('http://localhost:3000/api/menu')
  const menuData = await res.json();
  const menu: MenuItem[] = menuData.menuItems;

  return (
    <nav className={styles.header}>
      <div>
        <p>Logo</p>
      </div>
      <ul className={styles.optionList}>
        {menu.map((section: MenuItem) => (
          <li key={section.slug}>
            <Link href={section.slug}>{section.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        <p>Login</p>
      </div>
    </nav>
  )
}
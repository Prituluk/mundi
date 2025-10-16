import styles from './Hero.module.css';
import HeroClient from './HeroClient';

interface HeroData {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen_url?: string;
  boton_texto?: string;
  boton_link?: string;
  activo?: boolean;
}

export async function Hero() {
  try {
    const res = await fetch('http://localhost:3000/api/heroData');
    
    if (!res.ok) {
      throw new Error('Error al obtener datos');
    }
    
    const data = await res.json();
    const banners: HeroData[] = data.banners || [];

    if (banners.length === 0) {
      return <div>No hay banners disponibles</div>;
    }

    return <HeroClient banners={banners} />;
  } catch (error) {
    console.error('Error en Hero:', error);
    return <div>Error al cargar los banners</div>;
  }
}
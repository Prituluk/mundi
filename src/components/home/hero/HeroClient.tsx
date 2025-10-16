'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

interface HeroData {
  id?: number;
  titulo?: string;
  descripcion?: string;
  imagen_url?: string;
  boton_texto?: string;
  boton_link?: string;
  activo?: boolean;
}

interface HeroClientProps {
  banners: HeroData[];
}

export default function HeroClient({ banners }: HeroClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (banners.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % banners.length);
      
      setTimeout(() => setIsAnimating(false), 1000);
    }, 10000); 

    return () => clearInterval(interval);
  }, [banners.length, isAnimating]);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.transform = `translateX(-${currentIndex * 98}vw)`;
      
      setIsFading(true);
      const timer = setTimeout(() => setIsFading(false), 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section className={styles.heroContainer}>
      <div 
        className={`${styles.hero} ${isAnimating ? styles.animating : ''}`}
        ref={heroRef}
      >
        {banners.map((banner, index) => (
          <div className={styles.banner} key={banner.id || index}>
            <div 
              className={`${styles.banner_text} ${
                currentIndex === index ? styles.textVisible : ''
              }`}
            >
              <h2>{banner.titulo}</h2>
              <p>{banner.descripcion}</p>
              {banner.boton_texto && banner.boton_link && (
                <a href={banner.boton_link} className={styles.banner_button}>
                  {banner.boton_texto}
                </a>
              )}
            </div>
            <img
              src={banner.imagen_url}
              alt={banner.descripcion ?? banner.titulo ?? "Banner image"}
              className={currentIndex === index && isFading ? styles.fadeIn : ''}
            />
          </div>
        ))}
      </div>
      
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ''
            }`}
            onClick={() => {
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 1000);
            }}
            aria-label={`Ir al banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
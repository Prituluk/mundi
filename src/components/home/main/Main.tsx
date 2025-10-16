import { ApiResponse, SlugMap } from "./types";
import { SlugSections } from "./SlugSections";

interface MainProps {
  slug: keyof SlugMap;
}

export default async function Main({ slug }: MainProps) {
  const res = await fetch(`http://localhost:3000/api/data?slug=${slug}`);

  if (!res.ok) {
    throw new Error("Error al obtener los paquetes");
  }

  const data: ApiResponse = await res.json();
  const packages: SlugMap[typeof slug] = data.data[slug as keyof SlugMap] ?? [];

  const SectionComponent = SlugSections[slug];
  
  if (!SectionComponent) {
    return <p>No existe una vista para el slug: {slug}</p>;
  }

  return <SectionComponent packages={packages} />;
}
import { ApiResponse, SlugMap } from "./types";

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


  console.log(packages);

  return (
    <section>
      <h2>Paquetes de {slug}</h2>
      <ul >
        {packages.map((pkg: any) => (
          <li
            key={pkg.id}
          >
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p>
              <strong>Precio:</strong> {pkg.price?.currency} $
              {pkg.price?.amount.toFixed(2)}
            </p>
            <p>
              <strong>Disponibilidad:</strong>{" "}
              {pkg.available ? "Disponible" : "No disponible"}
            </p>
            <p>
              <strong>Válido hasta:</strong>{" "}
              {new Date(pkg.valid_until).toLocaleDateString("es-AR")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

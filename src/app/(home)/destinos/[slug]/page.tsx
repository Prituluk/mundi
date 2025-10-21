
export default async function Europa({ params }: { params: { slug: string } }) {

  interface Paquete {
    id: number,
    nombre: string,
    destino: string,
    descripcion: string,
    duracion_dias: number,
    precio_usd: number,
    incluye: [string],
    salidas: [string]
  }
  interface Paquetes {
    paquete: [Paquete]
  }

  const res = await fetch('http://localhost:3000/api/ofertas');
  const data = await res.json();
  const { slug } = await params;

  const paquetesFiltered = () => {
    return data.paquetes.filter(
      (paquete: Paquete) => paquete.destino.toLowerCase() === slug.toLowerCase()
    );
  };

  const paquete = await paquetesFiltered();

  return (
    <>
      {
        paquete.map((p: Paquete) => (
          <div key={p.id}>
            <h1>{p.destino}</h1>
            <p>{p.descripcion}</p>
            <p>{p.duracion_dias}</p>
            <ul>
              {p.incluye.map((i: string) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p>{p.precio_usd} USD</p>
            <p>{p.salidas[0]}</p>
          </div>
        ))
      }
    </>
  )
}
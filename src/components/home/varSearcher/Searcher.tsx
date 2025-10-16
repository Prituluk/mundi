import styles from './searcher.module.css';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  min?: number;
  max?: number;
}

interface SearcherField {
  name: string;
  message: string;
  type: string;
  placeholder: string;
  default: string | number;
  options?: string[];
  validations: ValidationRules;
}

interface SearcherData {
  [key: string]: {
    fields: SearcherField[];
  };
}
export async function Searcher({ params }: { params: { slug: string } }) {
  const res = await fetch('http://localhost:3000/api/searcher', {
    cache: 'no-store'
  });
  const data = await res.json();



  let selectedSection = data.menuConfig[`/${params.slug}`] ?? data.menuConfig["/vuelos"];

  if (!selectedSection) {
    return <p>No hay datos para esta sección.</p>;
  }

  const fields = selectedSection.fields;
  return (
    <section className={styles.searcher}>
      <h4>{params.slug}</h4>
      <form action="/submit" method='post'>
        <fieldset className={styles.fieldset}>
          {fields.map((field: SearcherField) => (
            <div key={field.name}>
              <label>{field.message}</label>
              <br />

              {
                field.type === 'select' ? (
                  <select defaultValue={field.default}>
                    {
                      field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))
                    }
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    defaultValue={field.default}

                  />
                )
              }
            </div>
          ))}
          <button type='submit'>Buscar</button>
        </fieldset>
      </form>
    </section>
  )
}

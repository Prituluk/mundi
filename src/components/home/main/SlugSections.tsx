import VuelosSection from "./VuelosSection";
import HotelesSection from "./HotelesSection";
import PaquetesSection from "./PaquetesSection";
import AutosSection from "./AutosSection";
import ActividadesSection from "./ActividadesSection";
import AsistenciaSection from "./AsistenciaSection";
import CrucerosSection from "./CrucerosSection";
import TrasladosSection from "./TrasladosSection";

export const SlugSections: Record<string, React.FC<{ packages: any[] }>> = {
  vuelos: VuelosSection,
  hoteles: HotelesSection,
  paquetes: PaquetesSection,
  autos: AutosSection,
  actividades: ActividadesSection,
  asistencia: AsistenciaSection,
  cruceros: CrucerosSection,
  traslados: TrasladosSection
};

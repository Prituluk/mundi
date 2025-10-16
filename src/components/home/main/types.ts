export interface Airport {
  airport_code: string;
  city: string;
  country: string;
}

export interface FlightSegment {
  id: string;
  origin: Airport;
  destination: Airport;
  departure_time: string;
  arrival_time: string;
  duration_minutes: number;
  class: string;
}

export interface FareRules {
  non_refundable: boolean;
  change_fee: number;
}

export interface Price {
  currency: string;
  amount: number;
}

export interface Flight {
  id: string;
  airline: string;
  segments: FlightSegment[];
  price: Price;
  available_seats: number;
  fare_rules: FareRules;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

export interface Room {
  room_id: string;
  type: string;
  bed_type: string;
  capacity: number;
  price_per_night: Price;
  available: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  rating: number;
  address: Address;
  rooms: Room[];
}

export interface PackageComponent {
  flight: string;
  hotel: {
    id: string;
    room_id: string;
    nights: number;
  };
  tour: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  description: string;
  components: PackageComponent;
  price: Price;
  available: boolean;
  valid_until: string;
}

export interface Auto {
  id: string;
  brand: string;
  model: string;
  type: string;
  seats: number;
  price_per_day: Price;
  available: boolean;
}

export interface TourSchedule {
  tour_date: string;
  start_time: string;
  end_time: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  duration_hours: number;
  price: Price;
  available_slots: number;
  schedule: TourSchedule[];
}

export interface Actividad {
  id: string;
  title: string;
  duration_hours: number;
  price: Price;
  available_slots: number;
}

export interface Asistencia {
  id: string;
  name: string;
  description: string;
  price: Price;
}

export interface Crucero {
  id: string;
  name: string;
  duration_days: number;
  price: Price;
  available_cabins: number;
}

export interface Traslado {
  id: string;
  type: string;
  vehicle: string;
  seats: number;
  price: Price;
  available: boolean;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchange_rate_to_usd: number;
}

export interface ApiResponse {
  status: string;
  data: {
    vuelos: Flight[];
    hoteles: Hotel[];
    paquetes: TravelPackage[];
    autos: Auto[];
    actividades: Actividad[];
    asistencia: Asistencia[];
    cruceros: Crucero[];
    traslados: Traslado[];
    currencies: Currency[];
  };
  meta: {
    timestamp: string;
    request_id: string;
  };
}

export type SlugMap = {
  vuelos: Flight[];
  hoteles: Hotel[];
  paquetes: TravelPackage[];
  autos: Auto[];
  actividades: Actividad[];
  asistencia: Asistencia[];
  cruceros: Crucero[];
  traslados: Traslado[];
};
export type SlugKey = keyof SlugMap;
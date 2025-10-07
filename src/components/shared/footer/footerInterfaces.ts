export interface Company {
  name: string;
  description: string;
  age_fundation: number;
  slogan: string;
}

export interface GeneralContact {
  phone_number: string;
  hours: string;
  email: string;
}

export interface TaxAddress {
  street: string;
  city: string;
  country: string;
  postal_code: string;
}

export interface Contact {
  customer_service: GeneralContact;
  sales: GeneralContact & { whatsapp: string };
  franchises: GeneralContact & { messager: string };
  tax_address: TaxAddress;
}

export interface Information {
  who_we_are: string;
  payment_methods: string;
  branches: string;
  frequently_asked_questions: string;
  help: string;
}

export interface ConsumerDefense {
  description: string;
  claim_url: string;
  general_address: string;
  queries_url: string;
}

export interface LegalRegistry {
  legal_name: string,
  file: string;
  disp: string;
  cuit: string;
}

export interface Validity {
  start_date: string;
  end_date: string;
  availability: string;
}

export interface Legal {
  law_24240: string;
  general_conditions: string;
  security_policy: string;
  privacy_policy: string;
  terms_and_conditions: string;
  consumer_defense: ConsumerDefense;
  registration: LegalRegistry;
  validity: Validity;
  afip_data_fiscal: string;
}

export interface SocialNetworks  {
facebook: string;
instagram: string;
twitter: string;
youtube: string;
}

export interface Extras  {
follow_us: SocialNetworks;
national_holidays: string;
affiliates: string;
rentals: string;
online_complaints_book: string;
}

export interface Copyright  {
text: string;
data_notice: string;
}
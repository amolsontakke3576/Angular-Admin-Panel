export interface Photographer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hasVerified: boolean;
  companyName?: string;
  multiCity: boolean;
  companyLogo?: string;
  locations: Location[];
  specialization?: string[]; // photography type.
  website?: string;
}

export interface Location {
  address: string;
  district: string;
  state: string;
  pin: string;
  mobileNo: number;
  latitude?: string;
  longitude?: string;
}

export interface PhotographerInfo {
  id: string;
  photographerId: string;
  aadharCardNumber: string;
  bankAccountNumber: string;
}

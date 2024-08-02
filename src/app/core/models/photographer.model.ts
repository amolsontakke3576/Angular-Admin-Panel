export interface Photographer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hasVerified: boolean;
  address?: string;
  latitude?: string;
  longitude?: string;
  companyName?: string;
  multiCity: boolean;
  companyLogo?: string;
  specialization?: string[]; // photography type.
  website?: string;
}

export interface PhotographerInfo {
  id: string;
  photographerId: string;
  aadharCardNumber: string;
  bankAccountNumber: string;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  tel: string;

  age: number;
  gender: Gender;
  address: Address;
}

interface Address {
  id: number;
  streetAddress: string;
  subDistrict: string;
  district: string;
  province: string;
  postalCode: string;
  patientId: number;
}

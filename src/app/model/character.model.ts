export interface Character {
  id: number;
  name: string;
  alignment: Alignment;
  affiliation: string;
  address: Address;
  skills: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Address {
  planet: string;
  city: string;
}

export enum Alignment {
  GOOD = 'good',
  BAD = 'bad',
}

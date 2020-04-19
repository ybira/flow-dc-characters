export interface User {
  id: number;
  fullName: string;
  email: string;
  role: Role;
}
export enum Role {
  EDITOR = 'EDITOR',
  READER = 'READER',
  ADMIN = 'ADMIN'
}

export type Issue = {
  description: string;
} & Meta;

export interface Meta {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whenCreated: Date;
}

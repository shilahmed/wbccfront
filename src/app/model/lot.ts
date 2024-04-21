import { Immeuble } from "./immeuble"; // Adjust the import path as necessary
import { User } from "./user";
export class Lot {
  id: number;

  description: string;

  nombre: number;
  surface: number;

  etage: number;

  immeuble: Immeuble;

  coproprietaire: User | null;

  locataire: User | null;

  constructor() {}
}

import { Lot } from "./lot";

export class Immeuble {
  id: number;

  name: string;

  address: string;
  numberLots: number;

  lots: Lot[];

  constructor() {}
}

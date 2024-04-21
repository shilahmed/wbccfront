import { User } from "./user";
import { Lot } from "./lot";

export class RemiseDeCle {
  id: number;

  donneur: User;

  receveur: User;

  lot: Lot;

  dateRemise: Date;

  commentaire: string;

  signature: string;

  photoOuVideo: string;

  constructor() {}
}

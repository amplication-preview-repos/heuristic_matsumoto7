import { Reservation } from "../reservation/Reservation";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};

import { Reservation } from "../reservation/Reservation";

export type Limo = {
  capacity: number | null;
  createdAt: Date;
  id: string;
  licensePlate: string | null;
  make: string | null;
  model: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};

import { Reservation } from "../reservation/Reservation";

export type Driver = {
  createdAt: Date;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phoneNumber: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};

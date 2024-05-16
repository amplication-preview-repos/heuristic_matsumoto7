import { Customer } from "../customer/Customer";
import { Driver } from "../driver/Driver";
import { Limo } from "../limo/Limo";

export type Reservation = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  driver?: Driver | null;
  dropoffLocation: string | null;
  id: string;
  limo?: Limo | null;
  pickupLocation: string | null;
  updatedAt: Date;
};

import { ReservationUpdateManyWithoutCustomersInput } from "./ReservationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationUpdateManyWithoutCustomersInput;
};

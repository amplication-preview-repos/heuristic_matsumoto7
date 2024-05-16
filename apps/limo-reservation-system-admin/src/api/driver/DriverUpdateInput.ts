import { ReservationUpdateManyWithoutDriversInput } from "./ReservationUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationUpdateManyWithoutDriversInput;
};

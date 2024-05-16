import { ReservationCreateNestedManyWithoutDriversInput } from "./ReservationCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutDriversInput;
};

import { ReservationCreateNestedManyWithoutCustomersInput } from "./ReservationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutCustomersInput;
};

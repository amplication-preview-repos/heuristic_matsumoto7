import { ReservationCreateNestedManyWithoutLimosInput } from "./ReservationCreateNestedManyWithoutLimosInput";

export type LimoCreateInput = {
  capacity?: number | null;
  licensePlate?: string | null;
  make?: string | null;
  model?: string | null;
  reservations?: ReservationCreateNestedManyWithoutLimosInput;
};

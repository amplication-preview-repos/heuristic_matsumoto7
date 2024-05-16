import { ReservationUpdateManyWithoutLimosInput } from "./ReservationUpdateManyWithoutLimosInput";

export type LimoUpdateInput = {
  capacity?: number | null;
  licensePlate?: string | null;
  make?: string | null;
  model?: string | null;
  reservations?: ReservationUpdateManyWithoutLimosInput;
};

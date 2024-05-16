import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "dropoffLocation";

export const ReservationTitle = (record: TReservation): string => {
  return record.dropoffLocation?.toString() || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  driverId?: SortOrder;
  dropoffLocation?: SortOrder;
  id?: SortOrder;
  limoId?: SortOrder;
  pickupLocation?: SortOrder;
  updatedAt?: SortOrder;
};

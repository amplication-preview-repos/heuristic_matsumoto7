import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { LimoWhereUniqueInput } from "../limo/LimoWhereUniqueInput";

export type ReservationUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  limo?: LimoWhereUniqueInput | null;
  pickupLocation?: string | null;
};

import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LimoWhereUniqueInput } from "../limo/LimoWhereUniqueInput";

export type ReservationWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  driver?: DriverWhereUniqueInput;
  dropoffLocation?: StringNullableFilter;
  id?: StringFilter;
  limo?: LimoWhereUniqueInput;
  pickupLocation?: StringNullableFilter;
};

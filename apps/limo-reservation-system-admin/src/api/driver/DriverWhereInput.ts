import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type DriverWhereInput = {
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};

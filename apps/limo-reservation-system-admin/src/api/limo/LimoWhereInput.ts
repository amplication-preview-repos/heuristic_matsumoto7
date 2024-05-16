import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type LimoWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  licensePlate?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};

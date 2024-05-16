import { SortOrder } from "../../util/SortOrder";

export type LimoOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  licensePlate?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  updatedAt?: SortOrder;
};

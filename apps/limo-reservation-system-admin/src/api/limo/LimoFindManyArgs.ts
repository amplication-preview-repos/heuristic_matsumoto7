import { LimoWhereInput } from "./LimoWhereInput";
import { LimoOrderByInput } from "./LimoOrderByInput";

export type LimoFindManyArgs = {
  where?: LimoWhereInput;
  orderBy?: Array<LimoOrderByInput>;
  skip?: number;
  take?: number;
};

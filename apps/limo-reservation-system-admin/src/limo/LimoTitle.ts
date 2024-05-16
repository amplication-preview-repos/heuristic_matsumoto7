import { Limo as TLimo } from "../api/limo/Limo";

export const LIMO_TITLE_FIELD = "licensePlate";

export const LimoTitle = (record: TLimo): string => {
  return record.licensePlate?.toString() || String(record.id);
};

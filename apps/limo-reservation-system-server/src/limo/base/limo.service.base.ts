/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Limo as PrismaLimo,
  Reservation as PrismaReservation,
} from "@prisma/client";

export class LimoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LimoCountArgs, "select">): Promise<number> {
    return this.prisma.limo.count(args);
  }

  async limos<T extends Prisma.LimoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LimoFindManyArgs>
  ): Promise<PrismaLimo[]> {
    return this.prisma.limo.findMany<Prisma.LimoFindManyArgs>(args);
  }
  async limo<T extends Prisma.LimoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LimoFindUniqueArgs>
  ): Promise<PrismaLimo | null> {
    return this.prisma.limo.findUnique(args);
  }
  async createLimo<T extends Prisma.LimoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LimoCreateArgs>
  ): Promise<PrismaLimo> {
    return this.prisma.limo.create<T>(args);
  }
  async updateLimo<T extends Prisma.LimoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LimoUpdateArgs>
  ): Promise<PrismaLimo> {
    return this.prisma.limo.update<T>(args);
  }
  async deleteLimo<T extends Prisma.LimoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LimoDeleteArgs>
  ): Promise<PrismaLimo> {
    return this.prisma.limo.delete(args);
  }

  async findReservations(
    parentId: string,
    args: Prisma.ReservationFindManyArgs
  ): Promise<PrismaReservation[]> {
    return this.prisma.limo
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reservations(args);
  }
}

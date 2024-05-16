import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LimoServiceBase } from "./base/limo.service.base";

@Injectable()
export class LimoService extends LimoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

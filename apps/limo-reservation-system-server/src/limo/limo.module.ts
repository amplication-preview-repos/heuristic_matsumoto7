import { Module } from "@nestjs/common";
import { LimoModuleBase } from "./base/limo.module.base";
import { LimoService } from "./limo.service";
import { LimoController } from "./limo.controller";
import { LimoResolver } from "./limo.resolver";

@Module({
  imports: [LimoModuleBase],
  controllers: [LimoController],
  providers: [LimoService, LimoResolver],
  exports: [LimoService],
})
export class LimoModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LimoService } from "./limo.service";
import { LimoControllerBase } from "./base/limo.controller.base";

@swagger.ApiTags("limos")
@common.Controller("limos")
export class LimoController extends LimoControllerBase {
  constructor(protected readonly service: LimoService) {
    super(service);
  }
}

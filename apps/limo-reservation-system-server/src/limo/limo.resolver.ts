import * as graphql from "@nestjs/graphql";
import { LimoResolverBase } from "./base/limo.resolver.base";
import { Limo } from "./base/Limo";
import { LimoService } from "./limo.service";

@graphql.Resolver(() => Limo)
export class LimoResolver extends LimoResolverBase {
  constructor(protected readonly service: LimoService) {
    super(service);
  }
}

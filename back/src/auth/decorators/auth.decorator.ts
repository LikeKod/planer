import { UseGuards } from "@nestjs/common/decorators";
import { JwtAuthGuard } from "../guards/jwt.guard";


export const Auth = () => UseGuards(JwtAuthGuard)
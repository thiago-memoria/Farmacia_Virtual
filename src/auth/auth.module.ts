import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/modules/users.module";


@Module({
    imports:[JwtModule.register({
        secret: "9CX}Mo?Ee#rEgi|IYQ/3pDK]-9;y:pj."

    }),
    UsersModule
],
    controllers: [AuthController]
})
export class AuthModule{

}
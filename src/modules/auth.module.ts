import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[JwtModule.register({
        secret: `f=3Jz@.XJvndX7U?2I<g.,cdv98lW?ES`
    })]
})
export class AuthModule{

}
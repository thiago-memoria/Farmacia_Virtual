import { Body, Controller, Post } from "@nestjs/common";
import { AuthForgetDTO } from "src/dto/auth/auth-forget.dto";
import { AuthLoginDTO } from "src/dto/auth/auth-login.dto";
import { AuthRegisterDTO } from "src/dto/auth/auth-register.dto";
import { AuthResetDTO } from "src/dto/auth/auth-reset.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { AuthService } from "src/services/auth.service";

@Controller('auth')
export class AuthController{

    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('login')
    async login(@Body() authLoginDto: AuthLoginDTO) {
    return this.authService.login();
  }

   @Post('register')
   async register(@Body() body: AuthRegisterDTO) {
   return this.authService.register();
  }

  @Post('forget')
  async forget(@Body() body: AuthForgetDTO) {
  return this.authService.forget();
  }


  @Post('reset')
  async reset(@Body() body: AuthResetDTO) {
    return this.authService.reset();
  }


}
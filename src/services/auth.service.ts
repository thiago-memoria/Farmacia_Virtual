import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService{
    private issuer = 'login';
    private audience = 'users';

constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    ){}
    
    createToken(){
        return{
            acessToken: this.jwtService.sign(
                {

                },
                {
                    expiresIn: '7 days',
                    issuer: this.issuer,
                    audience: this.audience,
                },
            ),
        };    
    }

    checkToken(token: string){
        try{
            const data = this.jwtService.verify(token, {
                issuer: this.issuer,
                audience: this.audience,
            });

            return data;
        }catch(e){
            throw new BadRequestException(e);
        }
    }

    isValidToken(token: string){
        try{
            this.checkToken(token);
            return true;
        }catch(e){
            return false;
        }
    }

    async login(){}

    async forget(){}

    async reset(){}

    async register(){}
}
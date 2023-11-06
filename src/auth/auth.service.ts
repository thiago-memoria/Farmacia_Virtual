import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService){}

    async createToken(){
        //return this.jwtService.sign();
    }


    async checkTocken(){
        // return this.jwtService.verify();
    }

    async login(email:string, password:string){
        
    }

    async forget(){}

    async reset(){}
}
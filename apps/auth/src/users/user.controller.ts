import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController{
    constructor(private userService  : UserService){}

    @Post("")
    create(data : any){

    }
    @Get("")
    findAll(){
        return this.userService.findAll()
    }

    
    @Get(":id")
    findOne(){}

    @Patch("")
    update(data : any){}

    @Delete(":id")
    delete(){}
}
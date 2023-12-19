import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "@app/common";

@Controller("users")
export class UserController{
    constructor(private userService  : UserService){}

    @Post("")
    async create(@Body() data : UserDto){
        return await this.userService.create(data)
    }
    @Get("")
    async findAll(){
        return await this.userService.findAll()
    }

    
    @Get(":id")
    async findOne(@Param('id') id : string){
        return await this.userService.findOne(id)
    }

    @Patch("/:id")
    async update(@Body() data : any , @Param("id") id : string){
        return await this.userService.update(id, data)
    }

    @Delete(":id")
    async delete(@Param("id") id : string){
        return await this.userService.delete(id)
    }
}
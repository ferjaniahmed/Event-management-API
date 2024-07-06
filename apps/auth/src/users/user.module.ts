import { SharedModule } from "@app/common/shares";
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserSchema } from "@app/common";

@Module({
    imports :[SharedModule.register([{name : "Users" , schema : UserSchema }])],
    controllers : [UserController],
    providers  : [UserService],
    exports : [UserService]
})
export class UserModule{}
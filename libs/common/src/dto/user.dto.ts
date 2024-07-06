import { IsEmail, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class UserDto{
    @IsMongoId()
    _id ?: string;
    @IsString()
    name : string;
    @IsEmail()
    @IsNotEmpty()
    email : string;
    password ?: string
}
import { IsDate, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "./user.dto";

export class EventDto{
    @IsMongoId()
    _id? : string;
    @IsString()
    name : string;
    @IsString()
    description : string;
    @IsDate()
    @IsNotEmpty()
    dateStartEvent : Date;
    @IsDate()
    @IsNotEmpty()
    dateEndEvent : Date
    @IsNotEmpty()
    user : UserDto | string
}
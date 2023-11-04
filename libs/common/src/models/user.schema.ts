import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type UserDocument = Document & User;

@Schema({timestamps : true})
export class User {
    @Prop({})
    email : string;
    @Prop({})
    password : string
    @Prop({})
    name : string
}
export const UserSchema = SchemaFactory.createForClass(User)
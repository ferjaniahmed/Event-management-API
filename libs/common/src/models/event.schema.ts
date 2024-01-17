import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User, UserDocument } from "./user.schema";


export type EventDocument = Document & Event;

@Schema({timestamps : true})
export class Event {
    @Prop({required : true})
    dateStartEvent : Date
    @Prop({required : true})
    dateEndEvent : Date
    @Prop({})
    name : string
    @Prop({})
    description : string
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user : UserDocument
}
export const EventSchema = SchemaFactory.createForClass(Event)
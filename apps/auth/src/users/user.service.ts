import { UserDocument } from "@app/common";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService{
    
    constructor(@InjectModel('User') private readonly userDocument :Model<UserDocument> ){}

    findAll(){
        return this.userDocument.find()
    }

    create(){}
}
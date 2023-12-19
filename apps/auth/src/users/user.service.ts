import { UserDocument, UserDto } from "@app/common";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService{
    
    constructor(@InjectModel('User') private readonly userDocument :Model<UserDocument> ){}

    async  findAll(){
        try{
            return await this.userDocument.find()
        }catch(e){
            throw new HttpException("NO USERS YET !!!" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    async findOne(id :string){
        try{
            return await this.userDocument.findById(id)
        }catch(e){
            throw new HttpException("USER NOT FOUND" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    async create(data : UserDto){
        try{
            const newUser = new this.userDocument(data) 
            return await newUser.save()
        }catch(e){
            throw new HttpException("CHECK YOUR INFORMATIONS" , HttpStatus.BAD_REQUEST,{cause : e})
        }
    }

    async update(id : string , data :UserDto){
        try{
            return await this.userDocument.updateOne({_id : id} , data , { new : true})
        }catch(e){
            throw new HttpException("USER NOT FOUND FOR THE UPDATE" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    async delete(id :string){
        try{
            return await this.userDocument.findByIdAndDelete(id)
        }catch(e){
            throw new HttpException("USER NOT FOUND FOR THE DELETE" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }
}
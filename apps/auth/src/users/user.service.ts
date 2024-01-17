import { UserDocument, UserDto } from "@app/common";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { saltOrRounds } from "./contants";
import { EventPattern, MessagePattern } from "@nestjs/microservices";

@Injectable()
export class UserService{
    
    constructor(@InjectModel('Users') private readonly userDocument :Model<UserDocument> ){}

    @MessagePattern("findAllUser")
    async findAll(){
        try{
            return await this.userDocument.find()
        }catch(e){
            throw new HttpException("NO USERS YET !!!" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }
    @MessagePattern("findOneUser")
    async findOne(id :string){
        try{
            return await this.userDocument.findById(id)
        }catch(e){
            throw new HttpException("USER NOT FOUND" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    @EventPattern("createUser")
    async create(data : UserDto){
        try{
            const hash = await  bcrypt.hash(data.password, saltOrRounds);
            data.password = hash
            const newUser = new this.userDocument(data) 
            return await newUser.save()
        }catch(e){
            throw new HttpException("CHECK YOUR INFORMATIONS" , HttpStatus.BAD_REQUEST,{cause : e})
        }
    }

    @EventPattern("UpdateUser")
    async update(id : string , data :UserDto){
        try{
            return await this.userDocument.updateOne({_id : id} , data , { new : true})
        }catch(e){
            throw new HttpException("USER NOT FOUND FOR THE UPDATE" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    @EventPattern("DeleteUser")
    async delete(id :string){
        try{
            return await this.userDocument.findByIdAndDelete(id)
        }catch(e){
            throw new HttpException("USER NOT FOUND FOR THE DELETE" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    @MessagePattern("findByEmailUser")
    async findByEmail(email){
        try{
            return await this.userDocument.findOne({email : email})
        }catch(e){
            throw new HttpException("USER NOT FOUND FOR THE DELETE" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }

    async verifyUser(email  : string , password : string){
        
        try{
            const user = await this.userDocument.findOne({email : email})
            if(user){
                if(await bcrypt.compare(password, user.password)){
                    return user
                }
            }else{
                return null
            }
            
        }catch(e){
            throw new HttpException("USER NOT FOUND FOR THE DELETE" , HttpStatus.NOT_FOUND,{cause : e})
        }
    }
}
import { EventDocument, EventDto } from '@app/common';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventService {

  constructor(
    @InjectModel("Events") private readonly eventDocument : Model<EventDocument> , 
    @Inject("AUTH_SERVICE") private readonly client : ClientProxy){}
 
  async findAll(){
    try{
      return await this.eventDocument.find()
    }catch(e){
      throw  new HttpException("we dont hane data yet!!", HttpStatus.NOT_FOUND , {cause  : e})
    }
  }


  async findOne( id : string){
    try{
      return (await this.eventDocument.findById(id))
    }catch(e){
      throw  new HttpException("we dont hane data yet!!", HttpStatus.NOT_FOUND , {cause  : e})
    }
  }


  async create(data : EventDto){
    try{
      const userExist = await this.client.send("findOneUser" , data.user);
      if(userExist){
        const newEvent = new this.eventDocument(data)
        return await newEvent.save()
      }else{
        throw new HttpException("check informations" , HttpStatus.BAD_REQUEST )
      }
    }catch(e){
      throw new HttpException("check informations" , HttpStatus.BAD_REQUEST , {cause : e})
    }
  }

  
  async update( id : string ,  data : EventDto){
    try{
      return await this.eventDocument.updateOne({_id : id} , data , {new  : true})
    }catch(e){
      throw new HttpException("check informations" , HttpStatus.BAD_REQUEST , {cause : e})
    }
  }


  async delete(id : string){
    try{
      return await this.eventDocument.deleteOne({_id : id})
    }catch(e){
      throw new HttpException("we dont have this event to delete" , HttpStatus.NOT_FOUND , {cause : e})
    }
  }
}

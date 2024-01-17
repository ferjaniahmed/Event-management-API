import { Body, Controller, Delete, Get, Header, Param, Patch, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from '@app/common';

@Controller("events")
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @Get("")
  async findAll(){
    return await this.eventService.findAll()
  }

  @Get(":id")
  async findOne(@Param("id") id : string){
    return await this.eventService.findOne(id)
  }

  @Post()
  async create(@Body() data : EventDto){
    return await this.eventService.create(data)
  }

  @Patch(":id")
  async update(@Param("id") id : string , @Body() data : EventDto){
    return await this.eventService.update(id,data)
  }

  @Delete(":id")
  delete(@Param("id") id : string){
    return this.eventService.delete(id)
  }
}

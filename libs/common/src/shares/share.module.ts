import { DynamicModule, Module } from "@nestjs/common";
import { AsyncModelFactory, ModelDefinition, MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../models";
import { DatabaseModule } from "../database";

@Module({
    /*imports :[DatabaseModule,MongooseModule.forFeature([{name : "User"  , schema : UserSchema}])],
    exports : [MongooseModule]*/
})
export class SharedModule{
    // dinamically create models 
    static async register(docs : ModelDefinition[]) : Promise<DynamicModule> {
        return {
            module : SharedModule,
            imports : [DatabaseModule , MongooseModule.forFeature(docs),],
            exports : [MongooseModule,DatabaseModule]
        }
    }
}
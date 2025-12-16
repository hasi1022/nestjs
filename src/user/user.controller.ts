import { Controller,Post,Get, Body,Put, Param,Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { creatUser } from './dto/user.dto';
import { Iuser } from './interface/user.interface';

@Controller('user')
export class UserController {
    constructor(private userservices:UserService){}
    @Post('create')
    create(@Body()create:creatUser){
          return this.userservices.createUser(create)
    }
    @Get()
    view(){
        return this.userservices.findAll();
    }
    @Get(':id')
    viewOne(@Param('id')id:string){
        return this.userservices.find(Number(id))
    }
    @Delete(':id')
    deleteOne(@Param('id')id:string){
        return this.userservices.delete(Number(id))
    }
    @Put(':id')
    update(@Param('id')id:string,@Body()body:Iuser){
        return this.userservices.update(Number(id),body)
    }
}

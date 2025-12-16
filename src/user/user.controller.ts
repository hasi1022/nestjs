import { Controller,Post,Get, Body, Param,Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { creatUser } from './dto/user.dto';

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

}

import { Controller,Post,Get, Body,Put, Param,Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { creatUser } from './dto/user.dto';
import { Iuser, login } from './interface/user.interface';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('user')
export class UserController {
    constructor(private userservices:UserService){}
    @Post('create')
    create(@Body()create:creatUser){
          return this.userservices.createUser(create)
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    view(){
        return this.userservices.findAll();
    }
    @UseGuards(JwtAuthGuard)
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
    @Post('login')
    login(@Body()data:login){
        return this.userservices.login(data)
    }
}

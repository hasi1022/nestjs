import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'utils/user';
import { creatUser } from './dto/user.dto';
import {Iuser} from './interface/user.interface'
import { NotFoundError } from 'rxjs';
import { login } from './interface/user.interface';
import * as bcrypt from "bcrypt"
import { access } from 'fs';
import {JwtService} from '@nestjs/jwt'
import { IcreateUser } from './interface/user.interface';

@Injectable()
export class UserService {
     constructor(
        @InjectRepository(User)
        private readonly userRepo:Repository<User>,
        private readonly jwtservice:JwtService
     ){}
     async createUser(createUser:creatUser):Promise<Iuser>{
        const hasedpassword=await bcrypt.hash(createUser.password,10)
      const user=this.userRepo.create({...createUser,password:hasedpassword});
      return await this.userRepo.save(user)
     }
     async findAll():Promise<Iuser[]>{
        return this.userRepo.find()
     }
     async find(id:number):Promise<Iuser|null>{
        return this.userRepo.findOneBy({id:id})
     }
     async delete(id:number){
        const user=await this.userRepo.delete({id:id})
        if(!user){
            throw new Error('not found user with this id')
        }
        return user
     }
     async update(id:number,updateData:Iuser){
        const user=await this.userRepo.update({id:id},{...updateData})
        if(!user){
            throw new Error('no user with this id found')
        }
        return user
     }
     async login(@Body()data:login){
        const user=await this.userRepo.findOneBy({email:data.email})
        if(!user){
            throw new Error('no user found')
        }
        const match=await bcrypt.compare(data.password,user.password)
        if(!match){
            throw new UnauthorizedException('Authorization failed')
        }
        const payload={id:user.id,email:user.email}
        return {
            access:this.jwtservice.sign(payload)
        }
     }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from 'utils/user';
import { creatUser } from './dto/user.dto';
import {Iuser} from './interface/user.interface'
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
     constructor(
        @InjectRepository(User)
        private readonly userRepo:Repository<User>
     ){}
     async createUser(createUser:creatUser):Promise<Iuser>{
      const user=this.userRepo.create(createUser);
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

}

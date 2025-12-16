import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import User from "utils/user";

export const typeOrmConfig:TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port:5433,
    username:'postgres',
    database:'newUser2',
    entities:[User],
    synchronize:true
}
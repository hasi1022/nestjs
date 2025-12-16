import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService  implements OnModuleInit{
  constructor(private datasource:DataSource){}
  getHello(): string {
    return 'Hello World!';
  }
  async onModuleInit(){
        await this.datasource.query('')
        console.log("DB connections succesfull")
  }
}

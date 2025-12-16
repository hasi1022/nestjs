import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LionController } from './lion/lion.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeModule } from './employe/employe.module';
import { StudentModule } from './student/student.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'utils/user';

import AppDataSource from 'migration/data-source';
import { typeOrmConfig } from 'migration/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [EmployeModule, StudentModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '12345678',
      database: 'newUser2',
      entities: [User],
      synchronize: true, 
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
    AuthModule],
  controllers: [AppController, LionController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}

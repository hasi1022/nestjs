import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LionController } from './lion/lion.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeModule } from './employe/employe.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [EmployeModule, StudentModule],
  controllers: [AppController, LionController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}

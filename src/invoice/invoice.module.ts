import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { Invoice } from 'utils/invoices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Items } from 'utils/items';

@Module({
  imports:[TypeOrmModule.forFeature([Invoice]),TypeOrmModule.forFeature([Items]),AuthModule],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule {}

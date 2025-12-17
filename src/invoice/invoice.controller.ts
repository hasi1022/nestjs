import { Controller ,UseGuards,Post, Body, Req,Get, UseInterceptors} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Invoice } from 'utils/invoices';
import { DcreateInvoice } from './dto/invoice.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceservice:InvoiceService){}
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(AnyFilesInterceptor())
    @Post('create')
    createInvoice(@Body()body:DcreateInvoice,@Req()req:any){
        return this.invoiceservice.createInvoice(body,req.user)
    }
    @UseGuards(JwtAuthGuard)
    
    @Get()
    getInvoice(){
        return this.invoiceservice.getInvoice();
    }

}

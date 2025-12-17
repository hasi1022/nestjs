import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from 'utils/invoices';
import { JwtService } from '@nestjs/jwt';
import { DcreateInvoice } from './dto/invoice.dto';
import { Items } from 'utils/items';
import User from 'utils/user';


@Injectable()
export class InvoiceService {
    constructor(
        @InjectRepository(Invoice)
        private readonly invoiceRepo:Repository<Invoice>,
        @InjectRepository(Items)
        private readonly itemRepo:Repository<Items>,
        private readonly jwtservice:JwtService
    )
    {}
    async createInvoice(data:DcreateInvoice,userReq:any){
        let grandTotal=0
        if(typeof data.items==='string'){
            data.items=JSON.parse(data.items)
        }
        // 
        const itemEntity=data.items.map(item=>{
            item.productTotalPrice=item.productQuantity*item.productUnitPrice;
            grandTotal+=item.productTotalPrice;
            return this.itemRepo.create(item)
        })
        data.grandTotal=grandTotal;
        const userId=userReq.userId;
        const invoice=this.invoiceRepo.create({...data,user:userId,items:itemEntity})
        return this.invoiceRepo.save(invoice)
    }
    async getInvoice(){
        return this.invoiceRepo.find({
            relations:{
                items:true,
                user:true
            }
        });
    }

}

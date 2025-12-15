import { Controller,Get,Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productServics:ProductService){}
    @Get()
    getProduct(){
        return this.productServics.getAllProduct();
    }
    @Get(':id')
    getProductId(@Param('id')id:string){
       return this.productServics.getProductsById(Number(id));
    }
}

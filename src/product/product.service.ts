import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products=[
        {
            id:1,name:'badminton',price:2000
        },
        {
            id:2,name:'cricket bat',price:1500
        },
        {
            id:3,name:'football',price:1700
        }
    ]
    getAllProduct(){
        return this.products;
    }
    getProductsById(id:number){
         return this.products.find((pro)=>pro.id===id)
    }
}

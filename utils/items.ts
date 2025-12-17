import { Entity,PrimaryGeneratedColumn,ManyToOne,OneToMany,Column } from "typeorm";
import { Invoice } from "./invoices";
@Entity()
export class Items{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    productName:string;
    @Column('int')
    productQuantity:number;
    @Column('decimal')
    productUnitPrice:number;
    @Column('decimal')
    productTotalPrice:number;
    @ManyToOne(()=>Invoice,Invoice=>Invoice.items,{onDelete:'CASCADE'})
    invoices:Invoice
}
import { Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToMany } from "typeorm";
import User from "./user";
import { Items } from "./items";
@Entity()
export class Invoice{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    invoiceNumber:number;
    @Column()
    invoiceDate:Date;
    @Column('decimal')
    grandTotal:number;
    @ManyToOne(()=>User,User=>User.invoices,{onDelete:'CASCADE'})
    user:User
    @OneToMany(()=>Items,Items=>Items.invoices,{cascade:true})
    item:Items[]
    
}
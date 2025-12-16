import { Entity,Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Invoice } from "./invoices";
@Entity('User')
export class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @OneToMany(()=>Invoice,Invoice=>Invoice.user)
    invoices:Invoice[]
}
export default User
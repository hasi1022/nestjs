import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "utils/user"

const AppDataSource=new DataSource({
    type:"postgres",
    host:"localhost",
    port:5433,
    username:'postgres',
    password:'12345678',
    database:'newUser2',
    entities:[User],
    synchronize:true,
    logging:true
}) 
async function connectDB(){
try{
    await AppDataSource.initialize()
    console.log('database connection succesfull')
}
catch(err){
    console.log(err)
}
}
connectDB()
export default AppDataSource
import { Controller,Get } from '@nestjs/common';

@Controller('employe')
export class EmployeController {
    @Get()
    getEmp(){
         return 'this is from employe hello there'
    }
}

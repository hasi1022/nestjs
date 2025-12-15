import { Controller,Get,Post,Put,Patch,Delete,Param,Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentservice:StudentService){}
    @Get()
    getStudent(){
        return this.studentservice.getStudent();
    }
    @Get(':id')
    getStudentId(@Param('id')id:string){
      return this.studentservice.getStudentId(Number(id))
    }
    @Post()
    create(@Body()body:{name:string,rollNo:number}){
       return this.studentservice.createStudent(body);
    }
    @Put(':id')
    putStudent(@Param('id')id:string,@Body()data:{name:string,rollNo:number}){
        return this.studentservice.putStudent(Number(id),data)
    }
    @Patch(':id')
    path(@Param('id')id:string,@Body()data:Partial<{name:string,rollNo:number}>){
        return this.studentservice.patchStudent(Number(id),data)
    }
    @Delete(':id')
    del(@Param('id')id:string){
        return this.studentservice.deleteStudent(Number(id))
    }

}

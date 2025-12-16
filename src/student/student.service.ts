import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private student=[
        {id:1,name:'hasi',rollNo:10},
        {id:2,name:'Harsh',rollNo:45}
    ]
    //get
    getStudent(){
        return this.student;
    }
    getStudentId(id:number){
        return this.student.find((std)=>std.id==id)
    }
    // post
    createStudent(data:{name:string,rollNo:number}){
        const newStd={
            id:Date.now(),
            ...data
        }
        this.student.push(newStd)
        return newStd
    }
    // PUT
    putStudent(id:number,data:{name:string,rollNo:number}){
        const index=this.student.findIndex((s)=>s.id==id)
        if(index==-1)throw new NotFoundException('student not found')
            this.student[index]={id,...data};
        return this.student[index]
    }
    // PATCH
    patchStudent(id:number,data:Partial<{name:string,rollNo:number}>){
        const studentPatch=this.getStudentId(id)
        if(!studentPatch){
            throw new Error('NO student with this id found')
        }
        Object.assign(studentPatch,data)
        return studentPatch
    }
    //delete
    deleteStudent(id:number){
        const index=this.student.findIndex((s)=>s.id===id);
        if(index===-1){
            throw new NotFoundException
        }
        const deleted=this.student.splice(index,1)
        return this.student[index]
    }

}

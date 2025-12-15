import { Controller, Get,Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('lion')
export class LionController {
  @Get()
  findAll(@Req() request:Request): string {
    return `this is lion ${{request}}`;
  }
}

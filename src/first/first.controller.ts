import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { FirstService } from './first.service';
@Controller('first')
export class FirstController {
  constructor(private readonly firstService: FirstService) {}

  @Get()
  getAll() {
    return this.firstService.getAll();
  }
  @Post()
  postAll() {
    return this.firstService.postAll();
  }
  @Patch()
  patchAll() {
    return this.firstService.patchAll();
  }
  @Delete()
  deleteAll() {
    return this.firstService.deleteAll();
  }
}

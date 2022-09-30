import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstService {
  getAll() {
    console.log(this.getAll);
    return 'get function';
  }
  postAll() {
    console.log(this.postAll);
    return 'post function';
  }
  patchAll() {
    console.log(this.patchAll);
    return 'patch function';
  }
  deleteAll() {
    console.log(this.deleteAll);
    return 'delete function';
  }
}

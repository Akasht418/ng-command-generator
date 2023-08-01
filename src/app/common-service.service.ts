import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor() {}

  actionData: any = {
    new: {
      name: 'new',
      message: 'ng new',
    },
    component: {
      name: 'component',
      message: 'ng generate component',
    },
    pipe: {
      name: 'pipe',
      message: 'ng generate pipe',
    },
    lib: {
      name: 'lib',
      message: 'ng generate library',
    },
  };

  getActionData() {
    return this.actionData;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor() {}

  actionData: any = {
    new: {
      name: 'new',
      code: 'ng new',
    },
    component: {
      name: 'component',
      code: 'ng generate component',
    },
    pipe: {
      name: 'pipe',
      code: 'ng generate pipe',
    },
    lib: {
      name: 'lib',
      code: 'ng generate library',
    },
  };

  actionList: any = {
    routing: {
      name: 'Routing',
      code: 'routing',
      dialogBox: false,
      enableFor: ['new'],
      message: '--routing'
    },
    dryRun: {
      name: 'Dry Run',
      code: 'dryRun',
      dialogBox: false,
      enableFor: ['component','lib','new'],
      message: '--dry-run'
    },
    style:{
      name: 'Style',
      code: 'style',
      dialogBox: true,
      enableFor: ['lib','pipe'],
      message: '--style'
    },
    skipTests: {
      name: 'Skip Tests',
      code: 'skipTests',
      dialogBox: false,
      enableFor: ['new','component'],
      message: '--skip-tests'
    },
    help: {
      name: 'Help',
      code: 'help',
      dialogBox: false,
      enableFor: ['new','component'],
      message: '--help'
    },
    inlineStyle: {
      name: 'Inline Style',
      code: 'inlineStyle',
      dialogBox: false,
      enableFor: [],
      message: '--inline-style'
    },
    inlineTemplate: {
      name: 'Inline Template',
      code: 'inlineTemplate',
      dialogBox: false,
      enableFor: ['component'],
      message: '--inline-template'
    }
  }

  actionDataList(actionName: any){
    return this.actionData[actionName].code
  }

  getActionData(actionName: any) {
    return this.actionDataList(actionName);
  }


}

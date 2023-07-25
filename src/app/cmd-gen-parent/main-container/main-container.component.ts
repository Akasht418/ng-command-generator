import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  cmd = '';
  selectType(type: string){
    if(type == 'new'){
      this.cmd = "ng new";
    }else if(type == 'component'){
      this.cmd = 'ng generate component'
    }else if(type == 'pipe'){
      this.cmd = 'ng generate pipe'
    }else if(type == 'lib'){
      this.cmd = 'ng generate library'
    }
  }
}

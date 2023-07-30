import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeGenAreaComponent } from './code-gen-area/code-gen-area.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent {

  @ViewChild('childForm') childForm!: CodeGenAreaComponent;

  cmd = '';
  selectType(type: string) {
    if (type == 'new') {
      this.cmd = 'ng new';
    } else if (type == 'component') {
      this.cmd = 'ng generate component';
    } else if (type == 'pipe') {
      this.cmd = 'ng generate pipe';
    } else if (type == 'lib') {
      this.cmd = 'ng generate library';
    }
    this.childForm.resetForm();

  }
  
}

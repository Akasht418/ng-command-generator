import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeGenAreaComponent } from './code-gen-area/code-gen-area.component';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent {
  constructor(private commonService: CommonServiceService){

  }
  type= 'new';

  @ViewChild('childForm') childForm!: CodeGenAreaComponent;

  cmd = 'ng new';
  selectType(type: string) {
    this.childForm.resetForm();
    this.type = type;
    this.cmd = this.commonService.getActionData(type);
  }
  
}

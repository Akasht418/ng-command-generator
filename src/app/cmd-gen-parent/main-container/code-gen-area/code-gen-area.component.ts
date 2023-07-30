import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-code-gen-area',
  templateUrl: './code-gen-area.component.html',
  styleUrls: ['./code-gen-area.component.scss'],
})
export class CodeGenAreaComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [,Validators.required], 
      code: [],
    });
  } 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() cmd: any;

  generate(){
    let name = this.form.get('name')?.value;
    let fullCommand = this.cmd + " " + name;
    this.form.get('code')?.patchValue(fullCommand);
  }

  resetForm(){
    this.form.get('code')?.reset();
    this.form.get('name')?.reset();
  }

}

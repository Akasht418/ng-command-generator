import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
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
      name: [, Validators.required],
      code: [],
      dryRun:[],
      routing: [],
      css:[]
    });
  }
  
  ngOnInit(): void {}
  @Input() cmd: any;

  generate() {
    if (!this.showError) {
      let name = this.form.get('name')?.value;
      let dryRun = this.form.get('dryRun')?.value ? '--dry-run': '';
      let routing = this.form.get('routing')?.value ? '--routing' : '';
      let fullCommand = this.cmd + ' ' + name + ' ' + dryRun + ' ' + routing;
      this.form.get('code')?.patchValue(fullCommand);
    }else{
      window.alert("Name is required");
    }
  }

  resetForm() {
    this.form.get('code')?.reset();
    this.form.get('name')?.reset();
    this.form.get('css')?.reset();
    this.form.get('routing')?.reset();
    this.form.get('dryRun')?.reset();
  }

  get showError(){
    return (this.form.get('name')?.value?.length>0) ? false : true;
  }
}

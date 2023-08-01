import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup-component/popup-component.component';

@Component({
  selector: 'app-code-gen-area',
  templateUrl: './code-gen-area.component.html',
  styleUrls: ['./code-gen-area.component.scss'],
})
export class CodeGenAreaComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.form = this.fb.group({
      name: [, Validators.required],
      code: [],
      dryRun: [],
      routing: [],
      css: [],
    });
  }

  ngOnInit(): void {}
  @Input() cmd: any;
  styleType: any ='';

  generate() {
    if (!this.showError) {
      let name = this.form.get('name')?.value;
      let dryRun = this.form.get('dryRun')?.value ? '--dry-run' : '';
      let routing = this.form.get('routing')?.value ? '--routing' : '';
      let fullCommand = this.cmd + ' ' + name + ' ' + dryRun + ' ' + routing + ' ' + this.styleType;
      this.form.get('code')?.patchValue(fullCommand);
    } else {
      window.alert('Name is required');
      this.form.get('css')?.reset();
    }
  }

  resetForm() {
    this.form.get('code')?.reset();
    this.form.get('name')?.reset();
    this.form.get('css')?.reset();
    this.form.get('routing')?.reset();
    this.form.get('dryRun')?.reset();
  }

  get showError() {
    return this.form.get('name')?.value?.length > 0 ? false : true;
  }

  openDialog() {
    if (!this.showError) {
      this.dialog
        .open(PopupComponent, {
          data: {
            animal: 'panda',
          },
        })
        .afterClosed()
        .subscribe((response) => {
          if (response) {
            this.form.get('css')?.patchValue(true);
            this.styleType = '--style='+response
          } else {
            this.form.get('css')?.reset();
            this.styleType = '';
          }
          this.generate();
        });
    } else {
      window.alert('Name is required');
    }
  }
}

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
import { CommonServiceService } from 'src/app/common-service.service';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-code-gen-area',
  templateUrl: './code-gen-area.component.html',
  styleUrls: ['./code-gen-area.component.scss'],
})
export class CodeGenAreaComponent implements OnInit {
  public form: FormGroup;
  list: any = [];
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private commonService: CommonServiceService,
    private clipboard: Clipboard
  ) {
    this.form = this.fb.group({
      name: [, Validators.required],
      code: [],
      checkBoxGroup: this.fb.group({
        dryRun: [],
        routing: [],
        style: [],
        skipTests: [],
        help: [],
        inlineStyle: [],
        inlineTemplate: [],
      }),
    });
    for (let [key, value] of Object.entries(this.commonService.actionList)) {
      let nae: any = [value][0];
      this.list.push(nae);
    }
  }

  ngOnInit(): void {}
  @Input() cmd: any;
  @Input() type: any;
  styleType: any = '';
  fullCommand = '';

  generate() {
    if (!this.showError) {
      let name = this.form.get('name')?.value;
      /*       let fullCommand =
        this.cmd +
        ' ' +
        name +
        ' ' +
        dryRun +
        ' ' +
        routing +
        ' ' +
        this.styleType; */
      this.fullCommand = this.cmd + ' ' + name + ' ';

      const checkboxGroup = this.form.get('checkBoxGroup') as FormGroup;

      Object.keys(checkboxGroup.controls).forEach((controlName) => {
        const control = checkboxGroup.get(controlName);
        if (control && control.value === true) {
          this.fullCommand += ' ' + this.getMessage(controlName);
        }
      });
      this.form.get('code')?.patchValue(this.fullCommand);
    } else {
      window.alert('Name is required');
      this.form.get('checkBoxGroup.style')?.reset();
    }
  }

  getMessage(type: any) {
    return this.commonService.actionList[type].message;
  }

  copyCode() {
    this.clipboard.copy(this.fullCommand);
  }

  resetForm() {
    this.form.get('code')?.reset();
    this.form.get('name')?.reset();
    this.form.get('checkBoxGroup.style')?.reset();
    this.form.get('checkBoxGroup.routing')?.reset();
    this.form.get('checkBoxGroup.dryRun')?.reset();
  }

  get showError() {
    return this.form.get('name')?.value?.length > 0 ? false : true;
  }

  openDialog() {
    if (!this.showError) {
      if (
        this.form.get('checkBoxGroup.style')?.value == false ||
        this.form.get('checkBoxGroup.style')?.value == undefined
      ) {
        this.dialog
          .open(PopupComponent, {
            data: {
              animal: 'panda',
            },
          })
          .afterClosed()
          .subscribe((response) => {
            if (response) {
              this.form.get('checkBoxGroup.style')?.patchValue(true);
              this.styleType = '--style=' + response;
            } else {
              this.form.get('checkBoxGroup.style')?.reset();
              this.styleType = '';
            }
          });
      } else {
        this.resetForm();
      }
    } else {
      window.alert('Name is required');
      this.form.get('checkBoxGroup.style')?.patchValue(false);
    }
  }
}

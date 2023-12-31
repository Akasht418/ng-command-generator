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
        styleValue: [],
        skipTests: [],
        skipTestsValue: [],
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
      this.fullCommand = this.cmd + ' ' + name + ' ';

      const checkboxGroup = this.form.get('checkBoxGroup') as FormGroup;

      Object.keys(checkboxGroup.controls).forEach((controlName) => {
        const control = checkboxGroup.get(controlName);
        if (
          control &&
          typeof control.value === 'boolean' &&
          !this.getDialogEnabled(controlName)
        ) {
          if (control.value) {
            this.fullCommand += ' ' + this.getMessage(controlName);
          }
        } else if (
          control &&
          control.value != null &&
          typeof control.value === 'string' &&
          this.getDialogEnabled(controlName)
        ) {
          this.fullCommand += ' ' + String(control.value);
        }
      });
      this.form.get('code')?.patchValue(this.fullCommand);
    } else {
      window.alert('Name is required');
      this.form.get('checkBoxGroup')?.reset();
    }
  }

  getMessage(type: any) {
    return this.commonService.actionList[type].message;
  }

  getDialogEnabled(type: any) {
    return this.commonService.actionList[type.replace('Value', '')].dialogBox
      ? true
      : false;
  }

  copyCode() {
    if (this.fullCommand.length > 0) {
      this.clipboard.copy(this.fullCommand);
      alert('Code copied!');
    }
  }

  resetForm() {
    this.fullCommand = '';
    this.form.get('code')?.reset();
    this.form.get('name')?.reset();
    this.form.get('checkBoxGroup')?.reset();
  }

  get showError() {
    return this.form.get('name')?.value?.length > 0 ? false : true;
  }

  openDialog(data: any) {
    if (!this.showError) {
      if (
        this.form.get('checkBoxGroup.' + data.code)?.value == false ||
        this.form.get('checkBoxGroup.' + data.code)?.value == undefined
      ) {
        this.dialog
          .open(PopupComponent, {
            data: data,
          })
          .afterClosed()
          .subscribe((response) => {
            if (response) {
              this.form.get('checkBoxGroup.' + data.code)?.patchValue(true);
              this.form
                .get('checkBoxGroup.' + data.code + 'Value')
                ?.patchValue(data.message + '=' + response);
            } else {
              this.form.get('checkBoxGroup.' + data.code)?.reset();
            }
          });
      } else {
        // this.resetForm();
        this.form.get('checkBoxGroup.' + data.code)?.reset();
        this.form
          .get('checkBoxGroup.' + data.code + 'Value')
          ?.patchValue('');
      }
    } else {
      window.alert('Name is required');
      this.form.get('checkBoxGroup.' + data.code)?.patchValue(false);
    }
  }
}

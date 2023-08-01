import {Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.scss'],
})
export class PopupComponent {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: [],
      styleType: ['css'],
    });
  }

  get showError() {
    return this.form.get('name')?.value?.length > 0 ? false : true;
  }

  ok() {
    if (!this.showError) {
      this.dialogRef.close(this.form.get('styleType')?.value);
    } else {
      window.alert('Name is required');
    }
  }
  cancel() {
    this.dialogRef.close(false);
  }
}

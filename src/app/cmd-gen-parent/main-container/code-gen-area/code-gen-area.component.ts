import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-code-gen-area',
  templateUrl: './code-gen-area.component.html',
  styleUrls: ['./code-gen-area.component.scss'],
})
export class CodeGenAreaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() cmd: any;

  code = new FormControl('');

}

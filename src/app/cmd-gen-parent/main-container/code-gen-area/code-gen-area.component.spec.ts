import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGenAreaComponent } from './code-gen-area.component';

describe('CodeGenAreaComponent', () => {
  let component: CodeGenAreaComponent;
  let fixture: ComponentFixture<CodeGenAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGenAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeGenAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

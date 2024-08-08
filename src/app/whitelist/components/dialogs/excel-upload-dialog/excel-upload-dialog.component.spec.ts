import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelUploadDialogComponent } from './excel-upload-dialog.component';

describe('ExcelUploadDialogComponent', () => {
  let component: ExcelUploadDialogComponent;
  let fixture: ComponentFixture<ExcelUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelUploadDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

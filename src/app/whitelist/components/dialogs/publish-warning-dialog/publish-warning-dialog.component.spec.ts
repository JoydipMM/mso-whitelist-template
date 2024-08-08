import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishWarningDialogComponent } from './publish-warning-dialog.component';

describe('PublishWarningDialogComponent', () => {
  let component: PublishWarningDialogComponent;
  let fixture: ComponentFixture<PublishWarningDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishWarningDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishWarningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

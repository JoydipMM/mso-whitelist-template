import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHiddenRowsDialogComponent } from './show-hidden-rows-dialog.component';

describe('ShowHiddenRowsDialogComponent', () => {
  let component: ShowHiddenRowsDialogComponent;
  let fixture: ComponentFixture<ShowHiddenRowsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHiddenRowsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHiddenRowsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

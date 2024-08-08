import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHiddenColumnsDialogComponent } from './show-hidden-columns-dialog.component';

describe('ShowHiddenColumnsDialogComponent', () => {
  let component: ShowHiddenColumnsDialogComponent;
  let fixture: ComponentFixture<ShowHiddenColumnsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHiddenColumnsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHiddenColumnsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcCardComponent } from './amc-card.component';

describe('AmcCardComponent', () => {
  let component: AmcCardComponent;
  let fixture: ComponentFixture<AmcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

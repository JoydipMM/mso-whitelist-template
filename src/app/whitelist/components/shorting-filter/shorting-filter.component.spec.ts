import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortingFilterComponent } from './shorting-filter.component';

describe('ShortingFilterComponent', () => {
  let component: ShortingFilterComponent;
  let fixture: ComponentFixture<ShortingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortingFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedFilterComponent } from './created-filter.component';

describe('CreatedFilterComponent', () => {
  let component: CreatedFilterComponent;
  let fixture: ComponentFixture<CreatedFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerageUploadComponent } from './brokerage-upload.component';

describe('BrokerageUploadComponent', () => {
  let component: BrokerageUploadComponent;
  let fixture: ComponentFixture<BrokerageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerageUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

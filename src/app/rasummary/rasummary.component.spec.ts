import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAsummaryComponent } from './rasummary.component';

describe('RAsummaryComponent', () => {
  let component: RAsummaryComponent;
  let fixture: ComponentFixture<RAsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAsummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

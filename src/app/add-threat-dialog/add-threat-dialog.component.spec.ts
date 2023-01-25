import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThreatDialogComponent } from './add-threat-dialog.component';

describe('AddThreatDialogComponent', () => {
  let component: AddThreatDialogComponent;
  let fixture: ComponentFixture<AddThreatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThreatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddThreatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawoComponent } from './sawo.component';

describe('SawoComponent', () => {
  let component: SawoComponent;
  let fixture: ComponentFixture<SawoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SawoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SawoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

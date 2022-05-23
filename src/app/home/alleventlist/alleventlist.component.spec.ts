import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventlistComponent } from './alleventlist.component';

describe('AlleventlistComponent', () => {
  let component: AlleventlistComponent;
  let fixture: ComponentFixture<AlleventlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleventlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleventlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

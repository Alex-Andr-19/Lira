import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiraPageComponent } from './lira-page.component';

describe('LiraPageComponent', () => {
  let component: LiraPageComponent;
  let fixture: ComponentFixture<LiraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

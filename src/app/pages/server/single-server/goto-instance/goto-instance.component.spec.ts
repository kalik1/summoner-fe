import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoInstanceComponent } from './goto-instance.component';

describe('GotoInstanceComponent', () => {
  let component: GotoInstanceComponent;
  let fixture: ComponentFixture<GotoInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GotoInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

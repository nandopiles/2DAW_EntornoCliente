import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtermComponent } from './longterm.component';

describe('LongtermComponent', () => {
  let component: LongtermComponent;
  let fixture: ComponentFixture<LongtermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongtermComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LongtermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

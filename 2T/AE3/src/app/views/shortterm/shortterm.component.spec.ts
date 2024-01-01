import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorttermComponent } from './shortterm.component';

describe('ShorttermComponent', () => {
  let component: ShorttermComponent;
  let fixture: ComponentFixture<ShorttermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShorttermComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShorttermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

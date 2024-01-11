import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesCardComponent } from './vegetables-card.component';

describe('VegetablesCardComponent', () => {
  let component: VegetablesCardComponent;
  let fixture: ComponentFixture<VegetablesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegetablesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegetablesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

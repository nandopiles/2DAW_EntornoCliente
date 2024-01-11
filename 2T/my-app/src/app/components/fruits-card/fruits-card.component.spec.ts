import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsCardComponent } from './fruits-card.component';

describe('FruitsCardComponent', () => {
  let component: FruitsCardComponent;
  let fixture: ComponentFixture<FruitsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

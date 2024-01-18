import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemigoComponent } from './memigo.component';

describe('MemigoComponent', () => {
  let component: MemigoComponent;
  let fixture: ComponentFixture<MemigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

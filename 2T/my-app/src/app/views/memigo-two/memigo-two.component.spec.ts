import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemigoTwoComponent } from './memigo-two.component';

describe('MemigoTwoComponent', () => {
  let component: MemigoTwoComponent;
  let fixture: ComponentFixture<MemigoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemigoTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemigoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

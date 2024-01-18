import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemigoThreeComponent } from './memigo-three.component';

describe('MemigoThreeComponent', () => {
  let component: MemigoThreeComponent;
  let fixture: ComponentFixture<MemigoThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemigoThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemigoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTwoComponent } from './view-two.component';

describe('ViewTwoComponent', () => {
  let component: ViewTwoComponent;
  let fixture: ComponentFixture<ViewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

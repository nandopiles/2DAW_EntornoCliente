import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTwoComponent } from './github-two.component';

describe('GithubTwoComponent', () => {
  let component: GithubTwoComponent;
  let fixture: ComponentFixture<GithubTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

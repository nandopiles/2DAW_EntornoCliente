import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article } from './article.component';

describe('VegetablesCardComponent', () => {
  let component: Article;
  let fixture: ComponentFixture<Article>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Article);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

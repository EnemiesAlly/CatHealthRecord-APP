import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page11Page } from './page11.page';

describe('Page11Page', () => {
  let component: Page11Page;
  let fixture: ComponentFixture<Page11Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Page11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

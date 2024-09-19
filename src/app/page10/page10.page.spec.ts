import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page10Page } from './page10.page';

describe('Page10Page', () => {
  let component: Page10Page;
  let fixture: ComponentFixture<Page10Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Page10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
